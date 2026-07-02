import api from "../api/axios";

export const getParagraph = async (difficulty = "easy") => {

    const response = await api.get(
        `/typing/paragraph?difficulty=${difficulty}`
    );

    return response.data;

};