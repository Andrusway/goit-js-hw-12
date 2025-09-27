import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

const form = document.querySelector(".form")

form.addEventListener("submit", event =>{
    event.preventDefault()

    const query = event.target.elements["search-text"].value.trim()

    if(!query){
        iziToast.warning({
            title: "Oops",
            message: "Please enter a search term!",
            position: "topRight"
        })
        return
    }

    showLoader()
    clearGallery()

    getImagesByQuery(query)
    .then(data => {
        if(data.hits.length === 0){
            iziToast.error({
                title: "No results",
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight"
            })
            return
        }
        createGallery(data.hits)
    }).catch((error) =>{
        iziToast.error({
            title:"Error",
            message:"Something went wrong. Please try again later!",
            position: "topRight"
        })
        console.log(error);
    }).finally(()=>{
        hideLoader()
    })
}
)