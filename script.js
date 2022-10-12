const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

// Unsplash API
const count = 10; 
const apiKey ='_oR_jSJpO4n1cllN0uol6Aygtpp8PGw9v2Lmx5xT_jw';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
// Load check
function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
    }
}
// Helper function 
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create elements for links and Photos , add to DOM
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;

    //Running foreach on photo array
    photosArray.forEach((photo) => {
       // Create <a> to link to unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html, 
            target: '_blank',
        });
        
        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
        });
        // Event Listner 
        img.addEventListener('load', imageLoaded);
        // Put <img> inside the <a>, put both inside imageContainer
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// GEt photos from unsplash 
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch Error
    }
}


// Check for the scroll near botttom
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scroll >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos();
    }
})

// OnLoad
getPhotos();