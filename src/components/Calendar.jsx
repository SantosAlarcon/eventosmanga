/** @jsxImportSource react */

import esLocale from "@fullcalendar/core/locales/es";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import { Suspense, useEffect, useState } from "react";
import "../styles/calendar.css";

const Calendar = () => {
	const [events, setEvents] = useState([]);
	const [isMobile, setIsMobile] = useState(false);
	const [mounted, setMounted] = useState(false);

	const fetchEvents = async () => {
		const events = await fetch("/api/event").then((res) => res.json());
		setEvents(events);
	};

	useEffect(() => {
		if (window.innerWidth <= 512) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}

		fetchEvents();

		setMounted(true);
	}, []);

	if (!mounted) return <Suspense fallback={
		<div>Cargando el calendario...</div>
	}></Suspense>;

	return (
		<FullCalendar
			plugins={[dayGridPlugin, listPlugin]}
			headerToolbar={{
				left: "prev, next",
				center: "title",
				right: "dayGridMonth, listWeek",
			}}
			initialView={isMobile ? "listWeek" : "dayGridMonth"}
			locale={esLocale}
			events={events}
			eventDisplay="auto"
			displayEventTime={false}
			displayEventEnd={false}
		/>
	);
};

export default Calendar;
