import api from "./api";

export async function postAnime(id, token, animeName ){
    const response = await api.post("/myanimes", {id, animeName}, 
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data; 
};

// export async function getAnimeByName(searchTerm, token){
//     console.log(searchTerm);
//     console.log(token);
//     const response = await api.get("/myanimes", {searchTerm}, {
//         headers: {
//             Authorization: `Bearer ${token}`
//         },
//         params: {
//             searchTerm
//         }
//     });
//     return response.data;
// };

export async function getAnimes(token, page, pageSize, searchTerm){
    const response = await api.get("/myanimes", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            page,
            pageSize,
            searchTerm
        }
    });
    return response.data;
};

export async function getAnimeByName(token, searchTerm){
    const response = await api.get("/myanimesbyterm", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            searchTerm
        }
    });
    return response.data;
};

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
