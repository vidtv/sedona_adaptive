function initMap() {
    // The location of Sedona
    let Sedona = {lat: 34.8638349, lng: -112.1345188};
    // The map, centered at Sedona
    let map = new google.maps.Map(
        document.getElementById('sedona-map'), {zoom: 7, center: Sedona});
    // The marker, positioned at Sedona
    let marker = new google.maps.Marker({position: Sedona, map: map});
}