import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./pixabay-api.js";
import { clearGallery, createGallery, hideLoader, showLoader } from "./render-functions.js";

const searchForm = document.querySelector(".form");
const searchInput = document.querySelector('input[name="search-text"]');

function searchImages(query) {
    if (!query) {
        iziToast.warning({
            message: "Please enter a search query.",
            position: "topRight",
        });
        return;
    }

    searchInput.value = query;
    clearGallery();
    showLoader();

    getImagesByQuery(query)
        .then(images => {
            if (images.length === 0) {
                iziToast.info({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight",
                });
                return;
            }

            createGallery(images);
        })
        .catch(error => {
            iziToast.error({
                message: error.message,
                position: "topRight",
            });
        })
        .finally(() => {
            hideLoader();
        });
}

searchForm.addEventListener("submit", event => {
    event.preventDefault();

    const query = searchInput.value.trim();

    if (!query) {
        searchImages(query);
        return;
    }

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("search-text", query);
    window.history.replaceState({}, "", `${window.location.pathname}?${searchParams}`);
    searchImages(query);
});

const initialQuery = new URLSearchParams(window.location.search).get("search-text")?.trim();

if (initialQuery) {
    searchImages(initialQuery);
}