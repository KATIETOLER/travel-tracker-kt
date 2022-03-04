// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css'
import './traveler'
import './api-calls'
import {
  fetchAllTravelerData,
  fetchAllTripData,
  fetchAllDestinationData,
  fetchOneTravelersData,
} from './api-calls'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/luggage.png'
import './images/sean-sinclair--unsplash.jpg'

const fetchAllData = () => {
  Promise.all([
    fetchAllTravelerData(),
    fetchAllTripData(),
    fetchAllDestinationData(),
    fetchOneTravelersData(),
  ]).then((allData) => parseAllData(allData))
}

window.addEventListener('load', fetchAllData)

//query selectors
// create tests for the traveller
// buttons and forms
// I should see a dashboard page that shows me:
// All of my trips (past, present, upcoming and pending)
// Total amount I have spent on trips this year. This should be calculated from the trips data and include a travel agent’s 10% fee
