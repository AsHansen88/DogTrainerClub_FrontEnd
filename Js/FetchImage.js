console.log("Vi er i fetchImage fra egen database")

window.addEventListener('DOMContentLoaded', () => {
    
    const gallery = document.querySelector('.gallery');
    const uploadForm = document.getElementById('uploadForm');
    const imageInput = document.getElementById('imageInput');

    // Fetch images from the REST API
    function fetchImages() {
        fetch('http://localhost:9090/')
            .then(response => response.json())
            .then(data => {
                // Clear existing gallery
                gallery.innerHTML = '';

                // Iterate over the images and create gallery items
                data.forEach(image => {
                    const galleryItem = document.createElement('div');
                    galleryItem.className = 'gallery-item';

                    const imageElement = document.createElement('img');
                    imageElement.src = image.url;
                    imageElement.alt = image.title;

                    galleryItem.appendChild(imageElement);
                    gallery.appendChild(galleryItem);
                });
            })
            .catch(error => console.error(error));
    }

    // Handle image upload
    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(uploadForm);

        fetch('http://localhost:9090/image', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log('Image uploaded:', data);
                imageInput.value = ''; // Clear the file input
                fetchImages(); // Refresh the gallery after uploading
            })
            .catch(error => console.error(error));
    });

    // Initial fetch to load images on page load
    fetchImages();
});
