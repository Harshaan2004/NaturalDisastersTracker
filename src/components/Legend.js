import React from 'react'                                  // React core library for JSX support
import FireMarker from './icons/FireMarker'                // Icon for Wildfire event
import SevereStormMarker from './icons/SevereStormMarker'  // Icon for Severe Storm event
import VolcanoMarker from './icons/VolcanoMarker'          // Icon for Volcano event
import IcebergMarker from './icons/IcebergMarker'          // Icon for Iceberg event

function Legend() {
  return (
    <span className="legend">
      <h3>Legend</h3>
      <ul>
        <li><VolcanoMarker /> Volcano </li>
        <li><FireMarker /> Wildfire </li>
        <li><SevereStormMarker /> Severe Storm </li>
        <li><IcebergMarker /> Iceberg </li>
      </ul>
    </span>
  )
}

export default Legend  // Export the Legend component
