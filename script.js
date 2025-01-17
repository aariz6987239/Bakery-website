// Detect Location Button
const detectLocationButton = document.getElementById('detect-location-btn');
detectLocationButton.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                document.getElementById('location-text').textContent = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
            },
            () => {
                document.getElementById('location-text').textContent = 'Unable to retrieve your location';
            }
        );
    } else {
        document.getElementById('location-text').textContent = 'Geolocation not supported';
    }
});