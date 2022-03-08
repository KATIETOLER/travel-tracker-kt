//query selectors
import { currentTraveler } from './scripts'
const dashboard = document.querySelector('.dashboard')
const userTrips = document.querySelector('.trips')
const userTotal = document.querySelector('.total')
const destinationOptions = document.querySelector('#destination-dropdown')
const status = document.querySelector('.submission-status')
const newTripButton = document.querySelector('.new-trip')
const yourAccountButton = document.querySelector('.your-account')
const formWrapper = document.querySelector('.form-wrapper')
const greeting = document.querySelector('.greeting')
const modal = document.querySelector('.modal')
const modalText = document.querySelector('.modal-content')
const closeModal = document.querySelector('.close')
const logoutButton = document.querySelector('.log-out-button')
const loginDisplay = document.querySelector('.login-display')
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
      acc += `<option value="${destination.id}">${destination.destination}</option>
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
  displayWelcomeMessage(currentTraveler)
}

const displayWelcomeMessage = (currentTraveler) => {
  greeting.innerHTML = `Welcome, ${currentTraveler.name}`
}

const displayTripSubmission = (message) => {
  show([status])
  status.innerText = `${message}`
}

const displayTotal = (currentTraveler) => {
  userTotal.innerHTML = `Total Spent on trips: $${currentTraveler.totalSpent}`
}
const displayNewTripForm = () => {
  showHide(
    [formWrapper, yourAccountButton],
    [newTripButton, loginDisplay, dashboard]
  )
}
const displayAccount = () => {
  showHide(
    [dashboard, newTripButton, logoutButton],
    [formWrapper, loginDisplay, yourAccountButton]
  )
}
const logout = () => {
  showHide(
    [loginDisplay],
    [dashboard, formWrapper, logoutButton, newTripButton, yourAccountButton]
  )
}

const displayModal = (message) => {
  modalText.innerText = `${message}`
  show([modal])
}

window.onclick = function (event) {
  if (event.target == modal) {
    hide([modal])
  }
}

closeModal.addEventListener('click', (event) => {
  hide([modal])
})

newTripButton.addEventListener('click', displayNewTripForm)
logoutButton.addEventListener('click', logout)
yourAccountButton.addEventListener('click', displayAccount)

export {
  displayDashboard,
  displayTotal,
  displayDestinationOptions,
  displayTripSubmission,
  displayModal,
  displayAccount,
}
