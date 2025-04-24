type Anime = {
    id: string;
    name: string;
    image:{
        original: string;
    }
    kind: string;
    episodes: number;
    episodes_aired: number;
    score: string;
    
}


export const load = async ({ fetch }) => {
    const response = await fetch('https://shikimori.one/api/animes?page=1&limit=100');
    const anime: Anime[] = await response.json();

    return {
        anime
    };
};