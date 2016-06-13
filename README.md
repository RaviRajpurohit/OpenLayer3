# OpenLayer3
Code for beginners of web developer, Who wanna work on HTML5 with OpenLayer3 

This HTML code shows very basic of map. means It show the map on web-browesr.<br>
HTML file contains the two part of code<br>
1. head<br>
2. body<br>
<b>Head</b> contains 3 javascript files and 2 css files, 1 css and 2 javascript files (ol.css, ol-debug.js, jquery-2.1.1.min.js) are basic file to add map with html. other files discribe below
<h4>main.css</h4>
Cascading Style Sheets, Its give a look to html code. '#' use for<b> Class</b> of html tag and '.' use for <b>Id</b> of html tag.<br>
<h4>main.js</h4>
Java script, Its main thing to handle the html page. It use some special function to perform any opration on html tag or code.<br>
<b>var</b> stand for variable declairation, here we declaire some globle verible <b>view, mapquest, osm, toner, stamen, map</b> and one local variable <b>layer</b> in change <b>block</b>.<br>The view variable is responsible to show map on screen with particulre position.<br> <b>center: ol.proj.fromLonLat([78.9629, 23.3])</b><br> It is deaclaire the centre of view. The parameter is an array, the collaction of longitude and laltitude of India.<br>Zoom by defualt value of view.<br>
<b>map</b> variable contains the control options, canvas view, map variabe and view variable.<br>
The<b> change</b> block is a function to performe selection process of map from list of map(one of the mapquest, osm, toner, stamen) <b>layer</b> variable select the layer of clicked map.
<br>mapquest, osm, toner, stamen these are type of map view. Stalite capture some data from sensor, then it convert into one of these view. every map create by tiles. Tile is a one part of map image.<br><b>setVisible</b> function reaturn the bulean value for selected map.
<br><br>Thanking you<br><a href="https://plus.google.com/u/0/116067657669390253429"><b>Ravi Rajpurohit</b></a>
