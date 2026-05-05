import { getCollection } from "astro:content";

export async function GET() {
	const events = (await getCollection("event"))
		.filter((event) => new Date(event.data.endDate) >= new Date())
		.sort((a, b) => a.data.startDate.valueOf() - b.data.startDate.valueOf());

	return new Response(JSON.stringify(events), {
		status: 200,
		headers: {
			"Content-Type": "application/json"
		}
	})
}
