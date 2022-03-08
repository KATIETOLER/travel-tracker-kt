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
  displayAccount,
  displayDestinationOptions,
  displayModal,
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
const userNameInput = document.querySelector('#userNameInput')
const passwordInput = document.querySelector('#passwordInput')
const submitLoginBtn = document.querySelector('#loginButton')

let currentTraveler
let travelerID
const fetchAllData = (id) => {
  Promise.all([
    fetchAllTravelerData(),
    fetchAllTripData(),
    fetchAllDestinationData(),
    fetchOneTravelersData(id),
  ])
    .then((allData) => {
      currentTraveler = new Traveler(
        allData[3],
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
    .catch((error) => displayModal(error))
}

const submitNewTrip = (event) => {
  event.preventDefault()

  const newTrip = {
    id: Date.now(),
    userID: travelerID,
    destinationID: parseInt(selectedDestination.value),
    travelers: parseInt(selectedTravelerNumber.value),
    date: selectedDate.value.replaceAll('-', '/'),
    duration: parseInt(selectedDuration.value),
    status: 'pending',
    suggestedActivities: [],
  }
  postNewTripData(newTrip)
    .then((data) => {
      fetchAllData(travelerID)
      displayTripSubmission(data.message)
    })
    .catch((error) => displayTripSubmission(error))
}

const setUserId = () => {
  travelerID = parseInt(userNameInput.value.substring(8))
}

const login = (event) => {
  event.preventDefault()
  setUserId()
  if (travelerID <= 50 && 0 < travelerID && passwordInput.value === 'travel') {
    fetchAllData(travelerID)
    return displayAccount()
  } else {
    displayModal('Sorry, wrong id or password, try again!')
  }
}

submitButton.addEventListener('click', (event) => {
  submitNewTrip(event)
})

submitLoginBtn.addEventListener('click', login)

export { currentTraveler }
