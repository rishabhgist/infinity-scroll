const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 3; 
const apiKey ='_oR_jSJpO4n1cllN0uol6Aygtpp8PGw9v2Lmx5xT_jw';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper function 
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create elements for links and Photos , add to DOM
function displayPhotos() {
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


// OnLoad
getPhotos();