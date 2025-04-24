// src/routes/item/+page.server.ts
import type { PageServerLoad } from './$types';

type Anime = {
	id: string;
	name: string;
	image: { original: string };
	kind: string;
	episodes: number;
	episodes_aired: number;
	score: string;
};

export const load: PageServerLoad = async ({ url, fetch }) => {
	const page = parseInt(url.searchParams.get('page') || '1');
	const limit = 20;
	const offset = (page - 1) * limit;

	const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=${limit}`);
	const anime: Anime[] = await response.json();

	return {
		anime,
		page,
		// assume there's a total count if needed, or set a fake total
		totalPages: 100 // or ideally: Math.ceil(total / limit)
	};
};
