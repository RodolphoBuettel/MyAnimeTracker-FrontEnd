import api from "./api";

export async function login(user) {
    const response = await api.post("/sign-in", user);
    return response.data;
};

export async function register(user) {
    const response = await api.post("sign-up", user);
    return response.data;
};
