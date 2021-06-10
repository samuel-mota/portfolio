import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/repos/samuel-mota/",
});

// portfolio/languages