function goToGallery() {
    // Hide the welcome page
    document.querySelector('.welcome-page').classList.add('hidden');
    
    // Show the gallery page
    document.querySelector('.gallery-page').classList.remove('hidden');

    // Generate some artworks dynamically (dummy data for demonstration)
    const artworks = [
        { title: 'Artwork 1', imageUrl: 'https://placekitten.com/200/300' },
        { title: 'Artwork 2', imageUrl: 'https://placekitten.com/201/301' },
        { title: 'Artwork 3', imageUrl: 'https://wallpaperbat.com/img/870892-coquette-aesthetic-poster-set-of-15-coquette-aesthetic.jpg' },
        { title: 'Artwork 4', imageUrl: 'https://placekitten.com/203/303' },
        { title: 'Artwork 5', imageUrl: 'https://placekitten.com/204/304' },
    ];

    const artworksContainer = document.querySelector('.artworks');

    artworks.forEach(artwork => {
        const artworkElement = document.createElement('div');
        artworkElement.classList.add('artwork');

        const imageElement = document.createElement('img');
        imageElement.src = artwork.imageUrl;
        imageElement.alt = artwork.title;

        const titleElement = document.createElement('h3');
        titleElement.textContent = artwork.title;

        artworkElement.appendChild(imageElement);
        artworkElement.appendChild(titleElement);
        artworksContainer.appendChild(artworkElement);
    });
}
