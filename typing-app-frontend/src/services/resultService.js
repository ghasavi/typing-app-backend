import api from "../api/axios";

export async function saveResult(userId, result) {

    const response = await api.post(
        `/results/${userId}`,
        result
    );

    return response.data;

}