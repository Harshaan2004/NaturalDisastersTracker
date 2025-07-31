import { useState } from 'react'               // React state management
import GoogleMapReact from 'google-map-react'  // Google Maps component for rendering the map

// Marker components for different natural events
import FireMarker from './icons/FireMarker'
import SevereStormMarker from './icons/SevereStormMarker'
import VolcanoMarker from './icons/VolcanoMarker'
import IcebergMarker from './icons/IcebergMarker'

// Component to display info when a marker is clicked
import LocationInfoBox from './LocationInfoBox'

const Mapping = ({ eventData, center = { lat: 51.508045, lng: -0.128217 }, zoom = 0 }) => {
    const [locationInfo, setLocationInfo] = useState(null)  // Stores information about the clicked event marker

    // Map through the event data to create markers
    const markers = eventData.map((ev) => {
        const categoryId = ev.categories[0].id                                 // Extract event category ID
        const [lng, lat] = ev.geometries[0].coordinates                        // Destructure coordinates: [longitude, latitude]
        const onClick = () => setLocationInfo({ id: ev.id, title: ev.title })  // Handler for clicking a marker — stores event details

        // Wildfire marker
        if (categoryId === 8) {return <FireMarker key={ev.id} lat={lat} lng={lng} onClick={onClick} />}
        // Severe storm marker
        else if (categoryId === 10) {return <SevereStormMarker key={ev.id} lat={lat} lng={lng} onClick={onClick} />}
        // Iceberg marker
        else if (categoryId === 15) {return <IcebergMarker key={ev.id} lat={lat} lng={lng} onClick={onClick} />}
        // Volcano marker (filtering out one faulty API entry)
        else if (categoryId === 12 && ev.title !== 'Dukono Volcano, Indonesia') {return <VolcanoMarker key={ev.id} lat={lat} lng={lng} onClick={onClick} />}
        // Ignore events with unhandled categories
        return null
    })

    return (
        <div className='map'>
        <GoogleMapReact
            // Google Maps API key and initial map center position and zoom level
            bootstrapURLKeys={{ key: 'YOUR-GOOGLE-MAPS-API-KEY' }}
            defaultCenter={center}
            defaultZoom={zoom}
        >
    
            {markers}
        </GoogleMapReact>
        {/* Show location info if a marker was clicked */}
        {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
    }

    export default Mapping  // Export the Mapping component
