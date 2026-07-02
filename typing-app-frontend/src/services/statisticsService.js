import api from "../api/axios";

export const getMyResults = async () => {

    const response = await api.get("/results/my-results");

    return response.data;

};