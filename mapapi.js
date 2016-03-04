function myFunction() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("demo").innerHTML = "Width: " + w + "<br>Height: " + h;

}

function initMap() {
  var end = {lat: 38.166551, lng: -85.602028};
  var start   = {lat: ' ', lng: ' '};

  var map = new google.maps.Map(document.getElementById('map'), {
      center: end,
      scrollwheel: false,
      zoom: 7
});

var directionsDisplay = new google.maps.DirectionsRenderer({
  map: map
});

var request = {
  destination:  end,
  origin: ' ',
  travelMode: google.maps.TravelMode.DRIVING


};

var directionsService = new google.maps.directionsService();

directionsService.route(request, function(response, status){

if (status == google.maps.DirectionsStatus.OK) {

directionsDisplay.setDirections(response);
    }
  });
}
