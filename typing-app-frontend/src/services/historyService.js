import api from "../api/axios";

export async function getHistory() {

    const response = await api.get("/results/my-results");

    return response.data;

}