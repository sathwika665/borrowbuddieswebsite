// Select the image using its parent class or image ID
const image = document.querySelector('.city-item img'); // or use document.getElementById('cityImage');

// Add a click event listener to the image
image.addEventListener('click', function() {
    // Redirect to a different page on the website
    window.location.href = '/htmlfiles/categories.html'; // Change this to your target page's path
});
