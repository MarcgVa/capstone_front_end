import React, { useEffect, useState } from 'react'
import { useJsApiLoader,GoogleMap, DirectionsRenderer, DirectionsService } from "@react-google-maps/api"
import "./map.css"

const center = {lat: 38.309875, lng: -77.466316}
// const origin = "68 Walnut Farms Parkway, Fredericksburg, Virginia, 22405"
// const destination = '145 Hyannis Place, Fredricksburg, Virginia, 22406'

export default function Map({origin, destination}) {
  const { isLoaded} = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });
  const [directionResponse, setDirectionResponse] = useState(null);
  
  const calculateRoute = async() => { 
    if (origin === '' || destination === '') { return };
    // eslint-disable-next-line no-undef
    const destinationsService = new google.maps.DirectionsService()
    const results = await destinationsService.route({
      origin: origin,
      destination: destination,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING
    })

    setDirectionResponse(results);
  };
  
  
  useEffect(() => { 
    if (isLoaded) {
      calculateRoute();
    }
  },[isLoaded])
  
  if (!isLoaded) { 
    return <div>Not Loaded</div>
  }

  return (
    <div className='map-container'>
      {isLoaded}
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        options={{
          mapTypeControl: false,
        }}
      >
        {/* Display Directions here */
        directionResponse && <DirectionsRenderer directions={directionResponse} />}
      </GoogleMap>

    </div>
  )
}
