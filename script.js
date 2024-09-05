document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-image-btn');
    const imageUrlInput = document.getElementById('image-url');
    const gallery = document.getElementById('gallery');

    addButton.addEventListener('click', () => {
        const imageUrl = imageUrlInput.value.trim();
        if(imageUrl){
            addImage(imageUrl);
            imageUrlInput.value = '';
        }
    });

    function addImage(url){
        const image = document.createElement('img');
        image.src = url;
        image.className = 'w-full h-auto rounded-lg'; 

        const removeButton = document.createElement('button');
        removeButton.textContent = 'x';
        removeButton.className = 'absolute top-0 right-0 px-3 py-2  hover:bg-red-700 text-white bg-red-500 rounded-full';
        removeButton.onclick = () => gallery.removeChild(image.parentElement);

        const item = document.createElement('div');
        item.className = 'relative w-[200px]';
        item.appendChild(image);
        item.appendChild(removeButton);

        gallery.appendChild(item);
    }
});
