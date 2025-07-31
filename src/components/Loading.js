import spinner from './spinner.gif'  // Import loading spinner image

const Loading = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="loading" />
      <h1>Collecting Data</h1>
    </div>
  )
}

export default Loading  // Export the Loading component

