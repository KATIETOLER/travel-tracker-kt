import chai from 'chai'
const expect = chai.expect
import Trip from '../src/Trip'
import '../test/sample-data'

describe('Trip', () => {
  let trip
  let testTripData

  beforeEach(() => {
    testTripData = [
      {
        id: 1,
        userID: 44,
        destinationID: 49,
        travelers: 1,
        date: '2022/09/16',
        duration: 8,
        status: 'approved',
        suggestedActivities: [],
      },
      {
        id: 1,
        userID: 35,
        destinationID: 25,
        travelers: 5,
        date: '2022/10/04',
        duration: 18,
        status: 'approved',
        suggestedActivities: [],
      },
      {
        id: 1,
        userID: 3,
        destinationID: 22,
        travelers: 4,
        date: '2022/05/22',
        duration: 17,
        status: 'approved',
        suggestedActivities: [],
      },
    ]
    trip = new Trip(testTripData)
  })

  // TESTS

  it('should be a function', () => {
    expect(Trip).to.be.a('function')
  })

  it('should instantiate the Trip class', () => {
    expect(trip).to.be.an.instanceof(Trip)
  })

  it('should hold all of the travelers trip data', () => {
    expect(trip.tripData).to.deep.equal(testTripData)
  })
})
