var gMap;

function initMap() {
    //create new map
    gMap = new google.maps.Map(document.getElementById('map'), {
        center: {lat:30.2241, lng:-92.0198}, zoom: 4});

        var loc1 = new google.maps.Marker({position:{lat:30.4515, lng:-91.1871}, map:gMap})

        var loc2 = new google.maps.Marker({position:{lat:30.2094, lng:-95.7508}, map:gMap})

        var loc3 = new google.maps.Marker({position:{lat:41.6475, lng:-88.0895}, map:gMap})

        var infoWindow = new google.maps.InfoWindow({content: 'Romeoville, IL'});
        loc3.addListener('click', function(){
            infoWindow.open(gMap, loc3);
        });

        google.maps.event.addListener(gMap, 'idle', function(){
            updateGame()
        });
}

function updateGame(){
    console.log('function UpdateGame()!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    if (gMap.getBounds().contains({lat:30.4515, lng:-91.1871})) {
        inBounds = true;
    }

    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}
