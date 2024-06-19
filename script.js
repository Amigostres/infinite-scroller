const imageContainer = document.getElementById("imageContainer")
const loader = document.getElementById("loader")

let ready = false;
let imagesLoaded = 0
let totalImages = 0
let photoArr = []

//checks if all images are all loaded
function imageLoaded(){
    imagesLoaded++
    if(imagesLoaded === totalImages) {
        ready = true
        loader.hidden = true
        console.log(`ready =`, ready);
    }
}

// Create Elements for links and photos
function displayPhotos(){
    imagesLoaded = 0
    totalImages = photoArr.length
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
        //event listiner when the image is loaded
        img.setAttribute('load', imageLoaded)
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
        displayPhotos()
    }catch (e) {
        console.log('failed to get server request');
        console.log(e);
    }
}
getPhotos()



//check to see if user is close to the end, LOAD MORE PHOTOS!

window.addEventListener("scroll", (e) => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false
        getPhotos()
    }
})