type AnimeDetail = {
    id: string;
    name: string;
    image:{
        original: string;
        preview: string;
        x96: string;
        x48: string;
    };
    url: string;
    aired_on: string;
    released_on: string;
    status: string;
    russian: string;
    kind: string;
    episodes: number;
    episodes_aired: number;
    score: string;
}


export const load = async ({ fetch, params }) => {
    const { id } = params;
    const response = await fetch(`https://shikimori.one/api/animes/${id}`);
    const animeDetail: AnimeDetail = await response.json();

    return {
        animeDetail
    };
};