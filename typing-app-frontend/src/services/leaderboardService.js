import api from "../api/axios";

export const getLeaderboard = async () => {

    const response = await api.get("/results/leaderboard");

    return response.data;

};