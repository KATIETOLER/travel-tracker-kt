const fetchAllTravelerData = () => {
  return fetch('http://localhost:3001/api/v1/travelers')
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

const fetchAllTripData = () => {
  return fetch('http://localhost:3001/api/v1/trips').then((response) =>
    response.json()
  )
}

const fetchAllDestinationData = () => {
  return fetch('http://localhost:3001/api/v1/destinations').then((response) =>
    response.json()
  )
}

const fetchOneTravelersData = () => {
  return fetch('http://localhost:3001/api/v1/travelers/').then((response) =>
    response.json()
  )
}

const postNewTripData = (newTripData) => {
  return fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTripData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to send trip data')
    } else {
      return response.json()
    }
  })
}

export {
  postNewTripData,
  fetchAllTravelerData,
  fetchAllTripData,
  fetchAllDestinationData,
  fetchOneTravelersData,
}
