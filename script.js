const imageContainer = document.getElementById("imageContainer")
const loader = document.getElementById("loader")

let photoArr = []

// Create Elements for links and photos
function displayPhotos(){
    //Run a forEach method
    photoArr.forEach(photo => {
        //Create <a> to link to unSplash
        const item = document.createElement("a")
        item.setAttribute("href", photo.links.html)
        item.setAttribute("target", "_blank")
        //create a image or photo
        const img = document.createElement("img")
        img.setAttribute("src", photo.urls.regular)
        img.setAttribute("alt", photo.alt_description)
        img.setAttribute("title", photo.alt_description)
        //put <img> inside <a>
        item.appendChild(img)
        imageContainer.appendChild(item)
    })
}

//Unsplash URL
async function getPhotos(){
    try{
        const response = await fetch('http://localhost:8000/api');
        photoArr = await response.json()
        console.log(`recived data from backend=======`);
        displayPhotos()
    }catch (e) {
        console.log('failed to get server request');
        console.log(e);
    }
}
getPhotos()