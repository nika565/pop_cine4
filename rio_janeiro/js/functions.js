window.onload = function(){
    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-23.648420, -46.722480),
            scrollwheel:false,
            zoom:12,
            mapTypeID:google.maps.MapTypeID.ROADMAP
        }

        map = new google.maps.Map(document.getElementById('mapa'), mapProp)
    }

    function addMarker(lat,long,icon,content,click){
        var latlng = {'lat':lat, 'lng':long};

        var marker = new google.maps.Marker({
            position:latlng, 
            map:map,
            icon:icon
        });
        
        var infoWindow = new google.maps.InfoWindow({
            content:conatent,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,20)
        })

        google.maps.event.addListener(marker,'click',function(){
            infoWindow.open(map,marker);
        })
    }

    initialize()
    
    addMarker(-23.648420, -46.722480,'','',click)
}