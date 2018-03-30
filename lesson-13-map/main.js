function initMap() {
  var beetroot = { lat: 47.8159257, lng: 35.1685269 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: beetroot,
    
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
