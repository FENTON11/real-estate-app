import React, { useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useState } from 'react';
import * as ELG from 'esri-leaflet-geocoder';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const GeoCoderMarker = ({ address }) => {
  const map = useMap();
  const [position, setPosition] = useState([60, 19]);

  useEffect(() => {
    const geocodeService = ELG.geocodeService({
      apikey: 'AAPK9fd9e85b025744ae9580d0178107c1ddhtk-gmbqflOlcPPrUpgzROHbKgQ07I0d2Cngrwo5CkQmKnFLBOYL14TQrvuJ7ay8',
    });

    geocodeService.geocode().text(address).run((err, results, response) => {
      if (results && results.results && results.results.length > 0) {
        const { lat, lng } = results.results[0].latlng;
        setPosition([lat, lng]);
        map.flyTo([lat, lng], 6);
      }
    });
  }, [address, map]);

  return (
    <Marker position={position} icon={DefaultIcon}>
      <Popup>{address}</Popup>
    </Marker>
  );
};

export default GeoCoderMarker;
