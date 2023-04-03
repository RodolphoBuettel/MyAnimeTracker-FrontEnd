import api from "./api";

export async function postAnime(id, token){
    console.log(token);
    const response = await api.post("/myanimes", {id}, 
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data; 
};

export async function getAnimes(token){
    const response = await api.get("/myanimes", {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
    return response.data;
}

export async function deleteAnime(id, token){
    console.log(token);
    console.log(id);
    const response = await api.delete("/myanimes", {id}, 
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data; 
};

export async function getAnime(id, token){
    const response = await api.get(`/myanime/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
    return response.data;
}