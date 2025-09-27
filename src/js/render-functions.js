import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery")
const loader = document.querySelector(".loader")

const lightbox = new SimpleLightbox(".gallery a", {
    captionData: "alt",
    captionDelay: 250
})

export function createGallery(images){
const markup =  images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
<li class="gallery-item">
<a class="gallery-link" href="${largeImageURL}">
<img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy">
</a>
<div class="info">
<p class="info-item"> <b>Likes</b> <span>${likes}</span></p>
<p class="info-item"> <b>Views</b> <span>${views}</span></p>
<p class="info-item"> <b>Comments</b> <span>${comments}</span></p>
<p class="info-item"> <b>Downloads</b> <span>${downloads}</span></p>
</div>
</li>
`).join("")

gallery.insertAdjacentHTML("beforeend", markup)
lightbox.refresh()

}




export function clearGallery() {
    gallery.innerHTML = ""
}

export function showLoader() {
if(loader) loader.classList.remove("hidden")
}


export function hideLoader() {
if(loader) loader.classList.add("hidden")

}