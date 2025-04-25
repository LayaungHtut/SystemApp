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
	const query = url.searchParams.get('q')?.trim();
	const limit = 20;

	let API = `https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=popularity`;
	if (query) {
		API = `https://shikimori.one/api/animes?search=${encodeURIComponent(query)}&limit=${limit}&page=${page}`;
	}

	const response = await fetch(API);
	const anime: Anime[] = await response.json();

	return {
		anime,
		page,
		query,
		totalPages: 1000 
	};
};
