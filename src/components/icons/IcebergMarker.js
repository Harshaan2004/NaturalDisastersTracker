import { Icon } from "@iconify/react";
import locationIcon from '@iconify/icons-mdi/snowflake-variant'

// This component is for the snowflake icon placement on the map
function IcebergMarker({ lat, lng, onClick }) {
    return (
        <span className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="iceberg-icon" />
        </span>
    )
}

export default IcebergMarker 