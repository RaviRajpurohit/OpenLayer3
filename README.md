# Geo Location
This Branch Takes some change in the Geo_Location.html, main.css and main.js.
<br><b>Geo_Location.html</b> has one lable to select the option, trake your location.<br>
The <b>main.css</b> just delete the layers part from itself.<br>
The<b> main.js</b> file take important changes to track your location. When user click on check box, map shows the location of user. Here location is server base becuase every one use a mobile phone, laptop, pc or etc. They use net from network, wifi or lan. The setalite get the position of server or network who provide the internet to the user.<br>
The <b>geolocation</b> variable project the location of user in the map.<br>
The <b>getElementById</b> take Id as parameter and call the related function.<br>
The <b>geolocation.on('error', function(error)...</b> it is an error handler funtion.<br>
The<b> accuracyFeature</b> is a globle varible to store the accuracy feature of user.<br>
The<b> positionFeature</b>, store the position of user. And show a point image on map, it give radius and colour to the point circle.<br>
The <b>new ol.layer.Vector({...</b> generate the new view when checked the check-box.
