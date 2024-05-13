import React, { useEffect, useState } from 'react';
import 'ol/ol.css';

// import Map from 'ol/Map';
import View from 'ol/View';
import { Map } from 'ol';
import Feature from 'ol/Feature';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import Circle from 'ol/geom/Circle';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { MapProps } from './types/map.ts';

const CustomMapComponent: React.FC<MapProps> = props => {
  const { locations } = props;
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    const initialMap = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([126.9779451, 37.5662952]),
        zoom: 16,
      }),
    });
    setMap(initialMap);

    return () => {
      initialMap.dispose();
    };
  }, []);

  useEffect(() => {
    if (!map) return;
    if (locations?.length > 0) {
      const vectorSource = new VectorSource();
      const vectorLayer = new VectorLayer({
        source: vectorSource,
      });

      map.addLayer(vectorLayer);

      const updateCircleGeometries = () => {
        const radius = 200;

        vectorSource.clear();

        locations.forEach(coord => {
          const [lng, lat] = fromLonLat([coord.lng, coord.lat]);
          const circleGeometry = new Circle([lng, lat], radius);
          const circleFeature = new Feature(circleGeometry);
          vectorSource.addFeature(circleFeature);
        });
      };

      updateCircleGeometries();
      /**
       * Triggered after the map is moved.
       * @event module:ol/MapEvent~MapEvent#moveend
       * @api
       */
      map.on('moveend', updateCircleGeometries);

      return () => {
        map.un('moveend', updateCircleGeometries);
      };
    }
  }, [map && locations]);

  return <div id="map" style={{ width: '100%', height: '100%' }} />;
};

export default CustomMapComponent;
