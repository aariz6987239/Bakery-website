// Detect Location Button Logic
document.getElementById("detect-location-btn").addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                document.getElementById("location-text").textContent = `Lat: ${latitude.toFixed(2)}, Long: ${longitude.toFixed(2)}`;
            },
            () => {
                alert("Unable to retrieve your location. Please allow location access.");
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
});