var map = L.map('map').setView([37.75714318563177, -122.44534300595339], 12);

  // load a tile layer
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

  // load GeoJSON from an external file
 $.getJSON("https://raw.githubusercontent.com/avagagner/assignment_2B_actual/main/sf_crime.geojson",function(data){
    var crimeIcon = L.icon({
      iconUrl: 'https://p7.hiclipart.com/preview/919/121/79/crime-theft-computer-icons-robbery-burglary-thief.jpg',
      iconSize: [30,30]
    });
    L.geoJson(data,{
      pointToLayer: function(feature,latlng){
        return L.marker(latlng,{icon: crimeIcon});
    }
  }  ).addTo(map);
 });
