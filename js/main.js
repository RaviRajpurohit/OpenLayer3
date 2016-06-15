$(document).ready(function(){
	var view = new ol.View({
		center: ol.proj.fromLonLat([78.9629, 23.3]),
		zoom: 4.5,
		maxZoom : 18,
		minZoom : 2
    	})
	var map = new ol.Map({
        target: 'map',
        conrols: ol.control.defaults().extend([
			new ol.control.ScaleLine(),
			new ol.control.ZoomSlider()
		]),
		renderer: 'canvas',
		layers: [new ol.layer.Tile({
		source: new ol.source.Stamen({
			layer: 'toner'
		})})],
		view: view
    	});
	
	var geolocation = new ol.Geolocation({
			projection: view.getProjection()
	});
	
	document.getElementById('track').addEventListener('change', function() {
		geolocation.setTracking(this.checked);
    	});
	
	geolocation.on('error', function(error) {
        var info = document.getElementById('info');
        info.innerHTML = error.message;
		info.style.display = '';
    	});
	
	geolocation.on('change:position', function() {
        var coordinates = geolocation.getPosition();
        positionFeature.setGeometry(coordinates ?
            new ol.geom.Point(coordinates) : null);
    	});
	
	var accuracyFeature = new ol.Feature();
		geolocation.on('change:accuracyGeometry', function() {
        		accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
    		});
	
	var positionFeature = new ol.Feature();
      		positionFeature.setStyle(new ol.style.Style({
        		image: new ol.style.Circle({
          			radius: 6,
          			fill: new ol.style.Fill({
            				color: '#3399CC'
          			}),
          			stroke: new ol.style.Stroke({
            				color: '#fff',
            				width: 2
          			})
        		})
    		}));
	
	new ol.layer.Vector({
        map: map,
        source: new ol.source.Vector({
          features: [accuracyFeature, positionFeature]
        })
    });
});
