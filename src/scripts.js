// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css'
import './Traveler'
import './api-calls'
import {
  fetchAllTravelerData,
  fetchAllTripData,
  fetchAllDestinationData,
  fetchOneTravelersData,
  postNewTripData,
} from './api-calls'
import {
  displayTripSubmission,
  displayDashboard,
  displayTotal,
  displayDestinationOptions,
} from './domUpdates'

import './images/turing-logo.png'
import './images/luggage.png'
import './images/sean-sinclair--unsplash.jpg'
import Traveler from './Traveler'

// query selectors

const selectedDate = document.querySelector('#dateSelector')
const selectedDuration = document.querySelector('#duration')
const selectedDestination = document.querySelector('#destination-dropdown')
const selectedTravelerNumber = document.querySelector('#traveler-number')
const submitButton = document.querySelector('#submitButton')

let currentTraveler

const fetchAllData = () => {
  Promise.all([
    fetchAllTravelerData(),
    fetchAllTripData(),
    fetchAllDestinationData(),
    fetchOneTravelersData(),
  ])
    .then((allData) => {
      currentTraveler = new Traveler(
        allData[0].travelers[0],
        allData[1].trips,
        allData[2].destinations
      )
      currentTraveler.getTravelerTripData(
        allData[1].trips,
        allData[2].destinations
      )
      currentTraveler.calculateAllTripTotal()
      displayDashboard(currentTraveler)
      displayTotal(currentTraveler)
      currentTraveler.getAllDestinations(allData[2].destinations)
      displayDestinationOptions(currentTraveler)
    })
    .catch((error) => console.log(error))
}

const submitNewTrip = (event) => {
  event.preventDefault()

  const newTrip = {
    id: Date.now(),
    userID: currentTraveler.id,
    destinationID: parseInt(selectedDestination.value),
    travelers: parseInt(selectedTravelerNumber.value),
    date: selectedDate.value.replaceAll('-', '/'),
    duration: parseInt(selectedDuration.value),
    status: 'pending',
    suggestedActivities: [],
  }
  console.log(newTrip)
  postNewTripData(newTrip)
    .then((data) => {
      fetchAllData()
      displayTripSubmission(data.message)
    })
    .catch((error) => displayTripSubmission(error))
}

window.addEventListener('load', fetchAllData)
submitButton.addEventListener('click', (event) => {
  submitNewTrip(event)
})

export { currentTraveler }
