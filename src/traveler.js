import Trip from './Trip'
import '../test/sample-data'

class Traveler {
  constructor(travelerData, allTripsData, allDestinationsData) {
    this.id = travelerData.id
    this.name = travelerData.name
    this.travelerType = travelerData.travelerType
    this.allTripsData = allTripsData
    this.allDestinationsData = allDestinationsData
    this.travelerTrips = []
    this.totalSpent = 0
    this.currentTripTotal = 0
    this.destinationOptions = []
  }

  getAllDestinations(allDestinationsData) {
    allDestinationsData.forEach((destination) => {
      this.destinationOptions.push(destination)
    })
  }

  getTravelerTripData(allTripsData, destinationsData) {
    allTripsData.forEach((trip) => {
      if (trip.userID === this.id) {
        const travelerTrip = new Trip(trip, destinationsData)
        travelerTrip.getTripDestination(destinationsData)
        this.travelerTrips.push(travelerTrip)
        travelerTrip.total = this.calculateTripCost(
          trip,
          travelerTrip.destination
        )
      }
    })
  }

  calculateTripCost(trip, destination) {
    const tripTotal =
      destination.estimatedLodgingCostPerDay * trip.duration +
      destination.estimatedFlightCostPerPerson * trip.travelers
    const fee = tripTotal / 0.1
    return fee + tripTotal
  }

  getDestinationById(id) {
    return this.allDestinationsData.find((destination) => destination.id === id)
  }

  calculateAllTripTotal() {
    const total = this.travelerTrips.reduce((acc, trip) => {
      if (trip.date.includes('2022')) {
        acc += trip.total
      }
      return acc
    }, 0)
    this.totalSpent = total
  }
}

export default Traveler
