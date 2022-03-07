//query selectors
import { currentTraveler } from './scripts'
const dashboard = document.querySelector('.dashboard')

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

const displayDashboard = (currentTraveler) => {
  console.log(currentTraveler)
  dashboard.innerHTML = currentTraveler.travelerTrips.reduce((acc, trip) => {
    acc += `<div class="trips">
          <h3>Reservation for: ${trip.date}</h3><br>
          <p>Destination: ${trip.destination.destination}</p><br>
          <p>Destination ID: ${trip.destination.id}</p><br>
          <p>Total Cost : ${trip.total}</p><br>
          <p>Trip Status : ${trip.status}</p><br>
          <p>Number of travelers : ${trip.travelers}</p><br>
        </div>`
    return acc
  }, '')
}

export { displayDashboard }
