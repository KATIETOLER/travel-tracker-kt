class Trip {
  constructor(tripData, destinationData) {
    this.id = tripData.id
    this.userID = tripData.userID
    this.destinationID = tripData.destinationID
    this.travelers = tripData.travelers
    this.date = tripData.date
    this.duration = tripData.duration
    this.status = tripData.status
    this.suggestedActivities = tripData.suggestedActivities
    this.destination
    this.total = 0
  }
  getTripDestination(destinationData) {
    const travelerDestination = destinationData.find(
      (destination) => destination.id === this.destinationID
    )
    this.destination = travelerDestination
    return travelerDestination
  }
}

export default Trip
