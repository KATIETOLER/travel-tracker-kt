import chai from 'chai'
const expect = chai.expect
import Trip from '../src/Trip'
import {
  testTravelerData,
  testDestinationData,
  testTripData,
} from './sample-data'

describe('Trip', () => {
  let trip

  beforeEach(() => {
    trip = new Trip(testTripData[0], testDestinationData[0])
  })

  // TESTS

  it('should be a function', () => {
    expect(Trip).to.be.a('function')
  })

  it('should instantiate the Trip class', () => {
    expect(trip).to.be.an.instanceof(Trip)
  })

  it('should have a user id', () => {
    expect(trip.userID).to.equal(1)
  })

  it('should have a duration', () => {
    expect(trip.duration).to.equal(8)
  })

  it('should have a status', () => {
    expect(trip.status).to.equal('approved')
  })

  it('should have a destination id', () => {
    expect(trip.destinationID).to.equal(1)
  })

  it('should show the number of travelers', () => {
    expect(trip.travelers).to.equal(1)
  })

  it('should start with no suggested activities', () => {
    expect(trip.suggestedActivities).to.deep.equal([])
  })

  it("should have a method to get the trip's destination", () => {
    expect(trip.getTripDestination(testDestinationData)).to.deep.equal({
      id: 1,
      destination: 'Lima, Peru',
      estimatedLodgingCostPerDay: 70,
      estimatedFlightCostPerPerson: 400,
      image:
        'https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
      alt: 'overview of city buildings with a clear sky',
    })
  })
})
