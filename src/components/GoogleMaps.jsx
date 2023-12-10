import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function GoogleMaps() {
  const position = { lat: 13.83645868357632, lng: 100.57418736331127 };
  const [open, setOpen] = useState(false);
  const googleMapsKey = import.meta.env.VITE_key 
  const mapIdKey = import.meta.env.VITE_MAP_ID

  return (
    <APIProvider apiKey={googleMapsKey}>
    <div className='h-[30vh] w-[80%] lg:h-[50vh] lg:w-[55%]'>
      <Map zoom={9} center={position} mapId={mapIdKey}>
        <AdvancedMarker position={position} onClick={() => setOpen(true)}>
          <Pin
            background={"white"}
            borderColor={"black"}
            glyphColor={"green"}
          />
        </AdvancedMarker>

        {open && (
          <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
            <p className="text-black animate-bounce font-bold">Apiwatz Live here</p>
          </InfoWindow>
        )}
      </Map>
    </div>
  </APIProvider>
  );
}