import api from "./api";

export async function allAnime(url) {
    const response = await api.get(url)
    return response.data.data;
};

export async function getAnimeById(url){
    const response = await api.get(url);
    return response.data.data;
} 