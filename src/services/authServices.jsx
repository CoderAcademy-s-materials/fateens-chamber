import fateenAPI from "../config/api"

export async function register(data) {
    const response = await fateenAPI.post('/api/users', data);
    return response.data;
}


export async function login(data) {
    const response = await fateenAPI.post('/api/auth/login', data);
    return response.data;
}


export async function logout() {
    sessionStorage.clear();
    return "Logged out."
}