import { useState, useEffect } from 'react'        // React hooks for state and lifecycle management

// Importing custom components used in the app
import Mapping from './components/Mapping'         // Main map component to render event markers
import Loader from './components/Loading'          // Loading spinner component
import Header from './components/Heading'          // Top header/title of the app
import Legend from './components/Legend'           // Legend to explain marker symbols

function App() {
  const [eventData, setEventData] = useState([])   // Stores natural event data fetched from NASA API
  const [loading, setLoading] = useState(false)    // Tracks loading state for conditional rendering

  useEffect(() => {
    // Fetches event data from NASA's EONET API on component mount
    const fetchEvents = async () => {
      try {
        setLoading(true)                                                             // Show loading spinner while fetching
        const response = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')  // API call
        const data = await response.json()                                           // Parse response to JSON
        setEventData(data?.events || [])                                             // Save events to state, fallback to empty array
      } finally {
        setLoading(false)                                                            // Stop loading spinner
      }
    }

    fetchEvents()  // Trigger data fetch
  }, [])           // Empty dependency array = run only once on mount

  return (
    <div>
      {loading ? (<Loader />) : (<><Header /><Mapping eventData={eventData} /><Legend /></>)}
    </div>
  )
}

export default App // Export the main App component as default
