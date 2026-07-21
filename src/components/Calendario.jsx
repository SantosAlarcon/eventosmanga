/** @jsxImportSource react */

import dayGridPlugin from "@fullcalendar/react/daygrid";
import esLocale from "@fullcalendar/react/locales/es";
import listPlugin from "@fullcalendar/react/list";
import { Suspense, useEffect, useState } from "react";
import "../styles/calendar.css";

const Calendario = () => {
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

	if (!mounted)
		return (
			<Suspense fallback={<div>Cargando el calendario...</div>}></Suspense>
		);

	return (
		<Calendar
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

export default Calendario;
