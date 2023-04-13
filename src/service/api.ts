import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "de1968fdf54f0c3036d2103568ab573e",
    language: "pt-BR",
    include_adult: false,
  },
});

export default api;