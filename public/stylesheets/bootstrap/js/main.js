function iniciarMapa() {
    var latlong = {lat: 36.718028, lng: -4.433796};
    var latlong2 = {lat: -34.397, lng: 150.644};
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
     var icons = {
          parking: {
            icon: iconBase + 'parking_lot_maps.png'
          }
      };
  
        var map = new google.maps.Map(document.getElementById('mapa'), {
          center: latlong,
          zoom: 2,
          mapTypeId: google.maps.MapTypeId.HYBRID
        });
        
        var marker = new google.maps.Marker({
                position: latlong,
                map: map,
                icon: iconBase + 'parking_lot_maps.png'
            });
        var marker2 = new google.maps.Marker (
                {
                    position:latlong2,
                    map:map,
                    title:"La Empresa"
                }
                        );
                
        var boundbox = new google.maps.LatLngBounds ();
        
        boundbox.extend(marker.position);
        boundbox.extend(marker2.position);
        
        map.setCenter(boundbox.getCenter());
        map.fitBounds(boundbox);
       
}

