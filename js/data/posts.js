import { url } from "./constants.js";
import { fetchData } from "./fetchApi.js";

export const posts = await fetchData(url);