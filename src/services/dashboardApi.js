import api from "./api";

export async function allAnime(url, filters) {
    const response = await api.get(url, {
        params: {
            filters
        },
    })
    return response.data.data;
};