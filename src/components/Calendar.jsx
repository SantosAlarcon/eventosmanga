/** @jsxImportSource react */

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import esLocale from "@fullcalendar/core/locales/es";
import { useEffect, useState } from "react";
import "../styles/calendar.css";

const Calendar = () => {
    const [events, setEvents] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    const fetchEvents = async () => {
        const events = await fetch("/eventosmanga/api/event").then((res) => res.json());
        setEvents(events);
    };
    

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 512) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener("resize", handleResize);

        fetchEvents();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
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
    );
};

export default Calendar;
