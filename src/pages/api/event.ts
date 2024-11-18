import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

type CalendarEvent = {
    title: string;
    start: Date;
    end: Date;
    location: string;
    url: string;
};

export const GET: APIRoute = async () => {
    const response  = await getCollection("event").then((events) => JSON.stringify(events));
    const events: CalendarEvent[] = [];

    // @ts-ignore
    JSON.parse(response).map((event) => {
        events.push({
            title: event.data.title,
            start: new Date(event.data.startDate),
            end: new Date(event.data.endDate),
            location: event.data.location,
            url: event.data.url,
        });
    });

    return new Response(JSON.stringify(events), { status: 200, headers: { "Content-Type": "application/json" } });
};
