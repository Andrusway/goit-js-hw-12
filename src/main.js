import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";

const form = document.querySelector(".form")
const loadMoreBtn = document.querySelector(".load-more-btn")
const searchBtn = document.querySelector(".search-btn")

let page = 1
let currentQuery = ""
let totalHits = 0

loadMoreBtn.classList.add("hidden")

form.addEventListener("submit", async event =>{
    event.preventDefault()

    searchBtn.disabled = true 

    const query = event.target.elements["search-text"].value.trim()

    if(!query){
        iziToast.warning({
            title: "Oops",
            message: "Please enter a search term!",
            position: "topRight"
        })
        searchBtn.disabled = false
        return
    }

    page = 1
    currentQuery = query
    

    showLoader()
    clearGallery()

    try{
        const data = await  getImagesByQuery(currentQuery, page)
        totalHits = data.totalHits

        if(data.hits.length === 0){
            iziToast.error({
                title: "No results",
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight"
            })
            return
        }
        createGallery(data.hits)
        if (totalHits > 15) {
           loadMoreBtn.classList.remove("hidden");
        } else {
        loadMoreBtn.classList.add("hidden");
        iziToast.info({
        title: "Info",
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight"
    });
  }
        

    }catch(error){
        iziToast.error({
            title:"Error",
            message:"Something went wrong. Please try again later!",
            position: "topRight"
        })
        console.log(error)
    }finally{
        hideLoader()
        searchBtn.disabled = false
    }
}
)



loadMoreBtn.addEventListener("click", async () => {
    loadMoreBtn.disabled = true

    page += 1
    showLoader()

    try{
        const data = await  getImagesByQuery(currentQuery, page)
        createGallery(data.hits)

        const { height: cartHeight} = document.querySelector(".gallery")
        .firstElementChild.getBoundingClientRect()

        window.scrollBy({
            top: cartHeight * 2,
            behavior: "smooth"
        })

        const loadedHits = page * 15
        if(loadedHits >= totalHits){
            loadMoreBtn.classList.add("hidden")
            iziToast.info({
                title: "Info",
                message: "We're sorry, but you've reached the end of search results.",
                position: "topRight"
            })
        }


    }catch(error){
        console.log(error)
    }finally{
        hideLoader()
        loadMoreBtn.disabled = false
    }
})

