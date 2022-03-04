const fetchAllTravelerData = () => {
  return fetch('http://localhost:3001/api/v1/travelers')
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

const fetchAllTripData = () => {
  return fetch('http://localhost:3001/api/v1/trips')
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

const fetchAllDestinationData = () => {
  return fetch('http://localhost:3001/api/v1/destinations')
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

const fetchOneTravelersData = () => {
  return fetch('http://localhost:3001/api/v1/travelers/')
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export {
  fetchAllTravelerData,
  fetchAllTripData,
  fetchAllDestinationData,
  fetchOneTravelersData,
}
