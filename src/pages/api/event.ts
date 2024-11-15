import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

type CalendarEvent = {
    title: string;
    start: string;
    end: string;
    location: string;
    url: string;
};

export const GET: APIRoute = async () => {
    const response: Array = await getCollection("event").then((events) => JSON.stringify(events));
    const events: CalendarEvent[] = [];

    // @ts-ignore
    JSON.parse(response).map((event) => {
        events.push({
            title: event.data.title,
            start: event.data.startDate,
            end: event.data.endDate,
            location: event.data.location,
            url: event.data.url,
        });
    });

    return new Response(JSON.stringify(events), { status: 200, headers: { "Content-Type": "application/json" } });
};
