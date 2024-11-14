import pkg from "@schedule-x/preact";
const { useCalendarApp, ScheduleXCalendar } = pkg;
import {
    createViewMonthAgenda,
    createViewMonthGrid,
} from "@schedule-x/calendar";

import "@schedule-x/theme-default/dist/index.css";

function CalendarApp() {
    const calendar = useCalendarApp({
        views: [createViewMonthGrid(), createViewMonthAgenda()],
        events: [
            {
                id: "1",
                title: "Event 1",
                start: "2023-12-16",
                end: "2023-12-16",
            },
        ],
    });

    return (
        <div>
            <ScheduleXCalendar calendarApp={calendar} />
        </div>
    );
}

export default CalendarApp;
