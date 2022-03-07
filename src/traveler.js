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
  // getTripsThisYear() {
  //   const currentDate = new Date()
  //   const parsedCurrentDate = this.parseDate(currentDate)
  //   const tripsThisYear = this.tripData.filter((trip) => {
  //     const parsedDate = trip.date.split('/').join('')
  //     return parsedDate >= parsedCurrentDate - 10000
  //   })
  //   return tripsThisYear
  // }

  // parseDate(date) {
  //   const yyyy = date.getFullYear()
  //   const mm = String(date.getMonth() + 1).padStart(2, '0')
  //   const dd = String(date.getDate()).padStart(2, '0')
  //   const parsedDate = `${yyyy}${mm}${dd}`
  //   return parsedDate
  // }

  calculateTripCost(trip, destination) {
    console.log('dstn', destination)
    console.log('flights', destination.estimatedFlightCostPerPerson)

    const tripTotal =
      destination.estimatedLodgingCostPerDay * trip.duration +
      destination.estimatedFlightCostPerPerson * trip.travelers
    const fee = tripTotal / 0.1
    return fee + tripTotal
  }

  calculateAllTripTotal() {
    const total = this.travelerTrips.reduce((acc, trip) => {
      acc += trip.total
      return acc
    }, 0)
    this.totalSpent = total
  }
}

export default Traveler
