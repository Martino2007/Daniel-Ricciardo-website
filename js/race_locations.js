// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 2);  // Set initial map view (latitude, longitude, zoom level)

// Add OpenStreetMap tiles to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker for the first race location (example)
L.marker([51.505, -0.09]).addTo(map)  // London (adjust coordinates for real locations)
    .bindPopup("<b>Formula 1 Race Location</b><br>London, UK")
    .openPopup();

// Add another marker for a different race location
L.marker([48.8566, 2.3522]).addTo(map)  // Paris
    .bindPopup("<b>Formula 1 Race Location</b><br>Paris, France");

// Add another marker for a third race location
L.marker([40.7128, -74.0060]).addTo(map)  // New York
    .bindPopup("<b>Formula 1 Race Location</b><br>New York, USA");

// Add more locations by following the same pattern as above
L.marker([52.38919215394662, 4.540283994748117]).addTo(map)  // Los Angeles
    .bindPopup("<b>Formula 1 Race Location</b><br>Zandvoort, Netherlands");

L.marker([-34.6037, -58.3816]).addTo(map)  // Buenos Aires, Argentina
    .bindPopup("<b>Formula 1 Race Location</b><br>Buenos Aires, Argentina");

// Add more markers as necessary, adjusting the coordinates and popup content
