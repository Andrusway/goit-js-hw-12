import axios from "axios";

const BASE_URL = "https://pixabay.com/api/"
const API_KEY = "52397534-5a81c9abe88dcfa16cadbb760"




export async function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    }
    return axios.get(BASE_URL, {params}).then(response => response.data)
}