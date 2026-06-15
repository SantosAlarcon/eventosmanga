import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context: APIContext) {
	const events = await getCollection('event');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site ?? 'https://www.eventosmanga.es',
		items: events.map((event) => ({
			...event.data,
			link: `/evento/${event.id}/`,
		})),
	});
}
