import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/repos/samuel-mota",
});

export const apiNotion = axios.create({
  baseURL: "https://api.notion.com",
});

// portfolio/languages