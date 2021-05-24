
    
        
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(obtenerclima);

            } else {
                $('#loca').html("no se pudo conseguir la info");
            }
        }

        function obtenerclima(position) {
            var latitud =position.coords.latitude;
            var longitud = position.coords.longitude;
            var linkAPi = "https://api.weatherapi.com/v1/current.json?key=14b1161cb8a045db9bc233601211605&q=";
            var linkfinal = linkAPi + latitud + "," + longitud;

            $.getJSON(linkfinal,
                function (data) {
                    $('#loca').html(data.location.name+", "+data.location.region+":"+data.current.temp_c+"°C");
                }
            );
        }
        jQuery(document).ready(function(){
            getLocation();
        });   
