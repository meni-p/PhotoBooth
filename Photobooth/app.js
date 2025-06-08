// find the vid element 
const video = document.getElementById("video");

//find the canvas element
const canvas = document.getElementById("canvas");

//find the gallery element
const gallery = document.getElementById("gallery");

//find the button element
const button = document.getElementById("click");


//ask for camera access
navigator.mediaDevices.getUserMedia({video : true}).then((stream) => {
    video.srcObject = stream;

    //dimensions
    video.onloadedmetadata = () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight
    }
})
.catch((err) => {
    console.error("something went wrong, srry bbg:", err);
});

//get image from the video 
function captureImage(){
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL("image/png");
    const img = document.createElement("img");
    img.src = imageData; //set the image source to the data URL
    gallery.innerHTML = "";
    gallery.appendChild(img);
}

button.addEventListener("click", captureImage)

//fix the sizing and showing the photos twice 
