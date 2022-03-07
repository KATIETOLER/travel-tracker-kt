//query selectors
import { currentTraveler } from './scripts'
const dashboard = document.querySelector('.dashboard')
const userTrips = document.querySelector('.trips')
const userTotal = document.querySelector('.total')
const destinationOptions = document.querySelector('#destination-dropdown')

const hide = (toHide) => {
  toHide.forEach((element) => {
    element.classList.add('hidden')
  })
}

const show = (toShow) => {
  toShow.forEach((element) => {
    element.classList.remove('hidden')
  })
}

const showHide = (toShow, toHide) => {
  hide(toHide)
  show(toShow)
}

/// dom updates object

const displayDestinationOptions = (currentTraveler) => {
  destinationOptions.innerHTML = currentTraveler.destinationOptions.reduce(
    (acc, destination) => {
      acc += `<option value="${destination}">${destination}</option>
      `
      return acc
    },
    ''
  )
}

const displayDashboard = (currentTraveler) => {
  userTrips.innerHTML = currentTraveler.travelerTrips.reduce((acc, trip) => {
    acc += `<div class="trips">
          <h3>Reservation for: ${trip.date}</h3><br>
          <p>Destination: ${trip.destination.destination}</p><br>
          <p>Destination ID: ${trip.destination.id}</p><br>
          <p>Total Cost : $${trip.total}</p><br>
          <p>Trip Status : ${trip.status}</p><br>
          <p>Number of travelers : ${trip.travelers}</p><br>
        </div>`
    return acc
  }, '')
}

const displayTotal = (currentTraveler) => {
  userTotal.innerHTML = `Total Spent on trips: $${currentTraveler.totalSpent}`
}

export { displayDashboard, displayTotal, displayDestinationOptions }
