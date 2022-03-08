import chai from 'chai'
const expect = chai.expect
import Traveler from '../src/Traveler'
import Trip from '../src/Trip'
import {
  testTravelerData,
  testDestinationData,
  testTripData,
} from './sample-data'

describe('Traveler', () => {
  let traveler

  beforeEach(() => {
    traveler = new Traveler(testTravelerData, testTripData, testDestinationData)
  })

  // TESTS

  it('should be a function', () => {
    expect(Traveler).to.be.a('function')
  })

  it('should instantiate the Traveler class', () => {
    expect(traveler).to.be.an.instanceof(Traveler)
  })

  it('should have an id', () => {
    traveler.getTravelerTripData(testTripData, testDestinationData)
    expect(traveler.id).to.equal(1)
  })

  it('should have a name', () => {
    expect(traveler.name).to.equal('Ham Leadbeater')
  })

  it('should have a traveler type', () => {
    expect(traveler.travelerType).to.equal('relaxer')
  })

  it('should start with no money in the total spent', () => {
    expect(traveler.totalSpent).to.equal(0)
  })

  it('should have a property to hold all the trip data', () => {
    expect(traveler.allTripsData.length).to.deep.equal(3)
  })

  it('should have a property to hold all the destination data', () => {
    expect(traveler.allDestinationsData.length).to.deep.equal(3)
  })

  it('should start with no trip information', () => {
    expect(traveler.travelerTrips).to.deep.equal([])
  })

  it('should start with no trip information', () => {
    expect(traveler.destinationOptions).to.deep.equal([])
  })

  it('should have a method to add all a travelers trip data', () => {
    traveler.getTravelerTripData(testTripData, testDestinationData)
    expect(traveler.travelerTrips.length).to.equal(3)
  })

  it('should have a method to get all the destination names', () => {
    traveler.getAllDestinations(testDestinationData)
    expect(traveler.destinationOptions.length).to.equal(3)
  })

  it('should have a method to get the total trip cost', () => {
    expect(
      traveler.calculateTripCost(testTripData[0], testDestinationData[0])
    ).to.equal(10560)
  })

  it('should have a method to get the total cost of all trips', () => {
    traveler.getTravelerTripData(testTripData, testDestinationData)
    traveler.calculateAllTripTotal()
    expect(traveler.totalSpent).to.equal(139370)
  })
})
