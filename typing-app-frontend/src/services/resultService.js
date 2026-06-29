import api from "../api/axios";

export const saveResult = async (userId, result) => {

    const response = await api.post(`/results/${userId}`, result);

    return response.data;
};

export const getResults = async () => {

    const response = await api.get("/results");

    return response.data;
};