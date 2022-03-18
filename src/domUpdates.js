//query selectors
import { currentTraveler } from './scripts'
const dashboard = document.querySelector('.dashboard')
const userTrips = document.querySelector('.user-trips')
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
const estCostBtn = document.querySelector('.estimated-cost')
const estCostDisplay = document.querySelector('.display-est-cost')

const selectedDuration = document.querySelector('#duration')
const selectedDestination = document.querySelector('#destination-dropdown')
const selectedTravelerNumber = document.querySelector('#traveler-number')
const selectedTravelerDate = document.querySelector('#dateSelector')

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
          <p class="status">Trip Status : ${trip.status}</p><br>
          <p>Number of travelers : ${trip.travelers}</p><br>
          <img src="${trip.destination.image}" alt="${trip.destination.alt}" style="width:350px;height:auto;"</img>
        </div>`
    return acc
  }, '')
  displayWelcomeMessage(currentTraveler)
}

const displayWelcomeMessage = (currentTraveler) => {
  show([greeting])
  greeting.innerHTML = `Welcome, ${currentTraveler.name}!`
}

const displayTripSubmission = (message) => {
  show([status])
  if (
    selectedDestination.value !== '' &&
    selectedDuration.value !== '' &&
    selectedTravelerNumber.value !== ''
  ) {
    displayModal(message)
  } else {
    displayModal(`Please fill out all fields`)
  }
}

const displayTotal = (currentTraveler) => {
  userTotal.innerHTML = `Total Spent on Trips this Year: $${currentTraveler.totalSpent}`
}

const resetTripForm = () => {
  selectedDestination.value = ''
  selectedDuration.value = ''
  selectedTravelerNumber.value = ''
  estCostDisplay.innerText = ''
  selectedTravelerDate.value = `mm/dd/yyyy`
}

const displayNewTripForm = () => {
  resetTripForm()
  showHide(
    [formWrapper, yourAccountButton],
    [newTripButton, loginDisplay, dashboard, greeting]
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
    [
      dashboard,
      formWrapper,
      logoutButton,
      newTripButton,
      yourAccountButton,
      greeting,
    ]
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

const displayEstimate = (event) => {
  event.preventDefault()

  const currentSelectedTrip = {
    travelers: parseInt(selectedTravelerNumber.value),
    duration: parseInt(selectedDuration.value),
  }

  const destinationData = currentTraveler.getDestinationById(
    parseInt(selectedDestination.value)
  )
  if (
    selectedDestination.value !== '' &&
    selectedDuration.value !== '' &&
    selectedTravelerNumber.value !== ''
  ) {
    estCostDisplay.innerHTML = `Estimated Cost: $ ${currentTraveler.calculateTripCost(
      currentSelectedTrip,
      destinationData
    )}`
  } else {
    displayModal(`Please fill out all fields`)
  }
}

closeModal.addEventListener('click', (event) => {
  hide([modal])
})

estCostBtn.addEventListener('click', (event) => {
  displayEstimate(event)
})

newTripButton.addEventListener('click', displayNewTripForm)
logoutButton.addEventListener('click', logout)
yourAccountButton.addEventListener('click', displayAccount)

export {
  displayEstimate,
  displayDashboard,
  displayTotal,
  displayDestinationOptions,
  displayTripSubmission,
  displayModal,
  displayAccount,
}
