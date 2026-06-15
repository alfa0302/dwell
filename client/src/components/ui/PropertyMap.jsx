import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { formatPrice } from "../../utils/helper";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function PropertyMap({ height = "300px" }) {
  const DUBAI_CENTER = [25.2048, 55.2708];
  const zoom = 11;

  return (
    <div className="mt-20">
      <MapContainer
        center={DUBAI_CENTER}
        zoom={zoom}
        scrollWheelZoom={true}
        zoomControl={false}
        className="w-full rounded-2xl"
        style={{ height }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors &copy; CARTO"
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        {/* {properties?.map((property) => (
          <Marker
            key={property.id}
            position={[property.coordinates.lat, property.coordinates.lng]}
          >
            <Popup>
              <div className="flex flex-col p-1">
                <img
                  src={property.images[0]}
                  alt="thumb"
                  className="w-full h-20 object-cover rounded mb-2"
                />
                <h3 className="font-semibold text-sm m-0">{property.title}</h3>
                <p className="text-xs text-gray-600 m-0">{property.location}</p>
                <p className="text-sm font-bold text-yellow-700 m-0">
                  AED {formatPrice(property.price)}
                </p>
              </div>
            </Popup>
          </Marker>
        ))} */}
      </MapContainer>
    </div>
  );
}
