import chai from 'chai'
const expect = chai.expect
import Traveler from '../src/Traveler'
import Trip from '../src/Trip'
import {
  testTravelerData,
  testDestinationData,
  testTravelerData,
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
    traveler.getTravelerTripData(testTripData2, testDestinationData)
    expect(traveler.id).to.equal(1)
  })

  it('should have a name', () => {
    expect(traveler.name).to.equal('Ham Leadbeater')
  })

  it('should have a traveler type', () => {
    expect(traveler.travelerType).to.equal('relaxer')
  })

  it('should start with no trip information', () => {
    expect(traveler.tripData).to.equal([])
  })

  it('should start with no destination information', () => {
    expect(traveler.travelerTrips).to.equal([])
  })
  it('should have a method to add all a travelers trip data', () => {
    traveler.getTravelerTripData(testTripData, testDestinationData)
    expect(traveler.travelerTrips).to.equal([
      {
        id: 1,
        userID: 1,
        destinationID: 1,
        travelers: 1,
        date: '2022/09/16',
        duration: 8,
        status: 'approved',
        suggestedActivities: [],
      },
      {
        id: 2,
        userID: 1,
        destinationID: 2,
        travelers: 5,
        date: '2022/10/04',
        duration: 18,
        status: 'approved',
        suggestedActivities: [],
      },
      {
        id: 3,
        userID: 1,
        destinationID: 3,
        travelers: 4,
        date: '2022/05/22',
        duration: 17,
        status: 'approved',
        suggestedActivities: [],
      },
    ])
  })
  it('should have a method to get all trip data', () => {
    traveler.addTripData(testTripData)
    expect(traveler.tripData).to.deep.equal(testTripData)
  })
})
