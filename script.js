// Unsplash API
const count = 3; 
const apiKey ='_oR_jSJpO4n1cllN0uol6Aygtpp8PGw9v2Lmx5xT_jw';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// GEt photos from unsplash 
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error
    }
}


// OnLoad
getPhotos();