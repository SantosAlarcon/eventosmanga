/** @jsxImportSource react */

import Calendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/react/daygrid";
import listPlugin from "@fullcalendar/react/list";
import esLocale from "@fullcalendar/react/locales/es";
import themePlugin from "@fullcalendar/react/themes/forma";
import { Suspense, useEffect, useState } from "react";
import "../styles/calendar.css";
import "@fullcalendar/react/skeleton.css";
import "@fullcalendar/react/themes/forma/theme.css";
import "@fullcalendar/react/themes/forma/palettes/red.css";

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
			plugins={[themePlugin, dayGridPlugin, listPlugin]}
			colorScheme="dark"
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
