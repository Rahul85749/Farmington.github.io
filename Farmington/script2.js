// Get references to elements
const imageUpload = document.getElementById('image-upload');
const imageContainer = document.getElementById('image-container');
const resultButton = document.getElementById('result-button');

// Add event listener to the image upload input
imageUpload.addEventListener('change', function () {
    const selectedFile = imageUpload.files[0];
    
    if (selectedFile) {
        // Display the uploaded image in the image container
        const reader = new FileReader();
        reader.onload = function (event) {
            const imageUrl = event.target.result;
            imageContainer.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image">`;
        };
        reader.readAsDataURL(selectedFile);
    }
});

// Add event listener to the result button
resultButton.addEventListener('click', function () {
    // You can add your image analysis or result generation logic here
    alert('Result Button Clicked!');
});
