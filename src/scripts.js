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
} from './api-calls'
import { displayDashboard, displayTotal } from './domUpdates'

import './images/turing-logo.png'
import './images/luggage.png'
import './images/sean-sinclair--unsplash.jpg'
import Traveler from './Traveler'

let currentTraveler

const fetchAllData = () => {
  Promise.all([
    fetchAllTravelerData(),
    fetchAllTripData(),
    fetchAllDestinationData(),
    fetchOneTravelersData(),
  ]).then((allData) => {
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
  })
}

window.addEventListener('load', fetchAllData)

export { currentTraveler }
