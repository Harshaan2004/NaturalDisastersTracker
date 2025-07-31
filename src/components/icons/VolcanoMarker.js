import { Icon } from "@iconify/react";
import locationIcon from '@iconify/icons-mdi/terrain'

// This component is for the volcano icon placement on the map
function VolcanoMarker({ lat, lng, onClick }) {
    return (
        <span className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="volcano-icon" />
        </span>
    )
}

export default VolcanoMarker
