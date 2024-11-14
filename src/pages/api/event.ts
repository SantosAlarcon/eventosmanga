import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
    const response = await getCollection("event").then((events) => JSON.stringify(events));

    return new Response(response, { status: 200, headers: { "Content-Type": "application/json" } });
};
