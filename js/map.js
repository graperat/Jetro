function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(52.1355845,-106.6473727,15)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  var image = "img/marker.png";
  var myLatLng = new google.maps.LatLng(52.1355845,-106.6473727,15);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);