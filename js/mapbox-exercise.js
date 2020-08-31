mapboxgl.accessToken = mapboxToken;
geocode("Austin, TX.", mapboxToken).then(function (result) {
    console.log(result);
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: result, // starting position [lng, lat]
        zoom: 10 // starting zoom
    });

    var restaurantInfo = [
        {
            address: "2337 E Cesar Chavez St, Austin, TX. 78702",
            nameAddress: "<h5>Counter Culture</h5><p>2337 E Cesar Chavez St, Austin, TX. 78702</p>"
        },
        {
            address: "7800 S 1st St, Austin, TX 78745",
            nameAddress: "<h5>Revolution Vegan Kitchen</h5><p>7800 S 1st St, Austin, TX 78745</p>"
        },
        {
            address: "4215 Duval St, Austin, TX 78751",
            nameAddress: "<h5>Mother's Cafe & Garden</h5><p>4215 Duval St, Austin, TX 78751</p>"
        }
    ];

    function placeMarkerAndPopup(info, token, map) {
        geocode(info.address, token).then(function(coordinates) {
            var popup = new mapboxgl.Popup()
                .setHTML(info.nameAddress);
            var marker = new mapboxgl.Marker()
                .setLngLat(coordinates)
                .addTo(map)
                .setPopup(popup);
        });
    }

    restaurantInfo.forEach(function(item) {
        placeMarkerAndPopup(item, mapboxToken, map);
    });
});