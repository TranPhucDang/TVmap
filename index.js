import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import TileWMS from 'ol/source/TileWMS';




var layers = [
  new TileLayer({
    source: new OSM()
  }),
  new TileLayer({
  
    source: new TileWMS({
      url: 'http://localhost:8081/geoserver/vnm/wms',
      params: {'LAYERS': 'vnm:vnm_adm1', 'TILED': true},
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0
    })
  })
];
var map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    center: [11816899.9708, 1580982.6893],
    zoom: 4
  })
});