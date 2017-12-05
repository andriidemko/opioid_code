// Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 0)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

// Google Maps

      function initMap() {

              var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: {lat: 40.0358384, lng: -75.174734}
              });

              var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

              var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                  position: location,
                  label: labels[i % labels.length]
                });
              });

              var markerCluster = new MarkerClusterer(map, markers,
                  {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
            }
            var locations = [
              {lat: 40.047799, lng: -75.173092},
              {lat: 40.020223, lng: -75.183520},
              {lat: 40.021118, lng: -75.171804},
              {lat: 40.02959, lng: -75.186095},
              {lat: 40.032319, lng: -75.193648},
              {lat: 40.028047, lng: -75.169358},
              {lat: 40.029493, lng: -75.208669},
              {lat: 40.032620, lng: -75.135841},
              {lat: 40.026902, lng: -75.147686},
              {lat: 40.039520, lng: -75.151978},
              {lat: 40.043725, lng: -75.177298},
              {lat: 40.044316, lng: -75.137043},
              {lat: 40.039744, lng: -75.172405},
              {lat: 40.038731, lng: -75.160990},
              {lat: 40.038205, lng: -75.168800},
              {lat: 40.044448, lng: -75.175152},
            ]


// Twiter

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
