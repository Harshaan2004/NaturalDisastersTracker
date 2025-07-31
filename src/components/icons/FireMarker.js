import { Icon } from "@iconify/react";
import locationIcon from '@iconify/icons-mdi/pine-tree-fire'

// This component is for the forest fire icon placement on the map
function FireMarker({ lat, lng, onClick }) {
    return (
        <span className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="fire-icon" />
        </span>
    )
}

export default FireMarker