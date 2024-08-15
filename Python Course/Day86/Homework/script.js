const photos = [
    "https://via.placeholder.com/600x400/ff7f7f",
    "https://via.placeholder.com/600x400/7f7fff",
    "https://via.placeholder.com/600x400/7fff7f"
];

let currentPhotoIndex = 0;

const photoElement = document.getElementById("photo");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const captureButton = document.getElementById("captureButton");

function updatePhoto(){
    photoElement.src = photos[currentPhotoIndex];
};

prevButton.onclick = function(){
    currentPhotoIndex = (currentPhotoIndex == 0) ? photos.length - 1 : currentPhotoIndex - 1;
    updatePhoto();
};

nextButton.onclick = function(){
    currentPhotoIndex = (currentPhotoIndex == photos.length - 1) ? 0 : currentPhotoIndex +1;
    updatePhoto();
};

captureButton.onclick = function(){
    console.log('Captured photo: ${photos[currentPhotoIndex]}');
    alert("photo Captured!");
};

photoElement.onmouseover = function(){
    photoElement.style.transform = 'scale(1.1)';
    console.log("Mouse is over the photo");
};

photoElement.onmouseout = function(){
    photoElement.style.transform = 'scale(1)';
    console.log("Mouse left the photo");
};

prevButton.onmousedown = function(){
    prevButton.style.backgroundColor = '#003366';
    console.log("Mouse down on Prev button");
};

prevButton.onmouseup = function(){
    prevButton.style.backgroundColor = '#007bff';
}

nextButton.onmouseover = function(){
    nextButton.style.backgroundColor = '#003366';
    console.log("Mouse down on Next button");
};

nextButton.onmouseup = function(){
    nextButton.style.backgroundColor = '#007bff';
};

