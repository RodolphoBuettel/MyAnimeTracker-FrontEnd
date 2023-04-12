import api from "./api";

export async function postAnime(id, token){
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
    const response = await api.delete(`/myanimes/${id}`, 
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
};

export async function addEp(id, token, num){
    console.log(token);
    const response = await api.put(`/myanimes/${id}`, {num}, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    console.log(response.data);
    return response.data;
};
