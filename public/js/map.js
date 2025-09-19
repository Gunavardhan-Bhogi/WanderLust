mapboxgl.accessToken = mapToken;

function initializeMap(containerId) {
    const map = new mapboxgl.Map({
        container: containerId, // Use the variable here
        style: "mapbox://styles/mapbox/satellite-streets-v12",
        center: listing.geometry.coordinates,
        zoom: 9,
    });

    const marker = new mapboxgl.Marker({ color: 'red' })
        .setLngLat(listing.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`
            )
        )
        .addTo(map);
}

if (document.getElementById('map')) {
    initializeMap('map'); // Creates the desktop map
} 
if (document.getElementById('map-mobile')) {
    initializeMap('map-mobile'); // Creates the mobile map
}