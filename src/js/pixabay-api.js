import axios from "axios";

const BASE_URL = "https://pixabay.com/api/"
const API_KEY = "52397534-5a81c9abe88dcfa16cadbb760"




export async function getImagesByQuery(query, page) {
    try{
        const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    }
    const response = await axios.get(BASE_URL, {params})
    return response.data
    }catch(error){
        console.log("Error fetching images:", error)
        throw error
    }
}


// return axios.get(BASE_URL, {params}).then(response => response.data)