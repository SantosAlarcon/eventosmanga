/** @jsxImportSource react */

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import esLocale from "@fullcalendar/core/locales/es";
import { Suspense, useEffect, useState } from "react";
import "../styles/calendar.css";

const Calendar = () => {
	const [events, setEvents] = useState([]);
	const [isMobile, setIsMobile] = useState(false);
	const [mounted, setMounted] = useState(false);

	const fetchEvents = async () => {
		const events = await fetch("/eventosmanga/api/event").then((res) =>
			res.json(),
		);
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

	if (!mounted) return null;

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<FullCalendar
				plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
				headerToolbar={{
					left: "prev, next",
					center: "title",
					right: "dayGridMonth, timeGridWeek, listWeek",
				}}
				initialView={isMobile ? "listWeek" : "dayGridMonth"}
				locale={esLocale}
				events={events}
				eventDisplay="auto"
				displayEventTime={false}
				displayEventEnd={false}
			/>
		</Suspense>
	);
};

export default Calendar;
