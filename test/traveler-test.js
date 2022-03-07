import chai from 'chai'
const expect = chai.expect
import Traveler from '../src/Traveler'
import Trip from '../src/Trip'
import './sample-data'

describe('Traveler', () => {
  let traveler
  let testTravelerData1

  beforeEach(() => {
    testTravelerData1 = {
      id: 1,
      name: 'Ham Leadbeater',
      travelerType: 'relaxer',
    }

    traveler = new Traveler(testTravelerData1)
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
    expect(traveler.destinationData).to.equal([])
  })

  it('should have a method to get all trip data', () => {
    traveler.addTripData(testTripData)
    expect(traveler.tripData).to.deep.equal(testTripData)
  })

  // it("the traveler should have a parameter that takes in trip data and stores the traveler's trip data in a property", () => {
  //   traveler.expect(traveler.tripData).to.deep.equal([
  //     {
  //       id: 102,
  //       userID: 1,
  //       destinationID: 3,
  //       travelers: 3,
  //       date: '2020/09/26',
  //       duration: 8,
  //       status: 'approved',
  //       suggestedActivities: [],
  //       destination: {
  //         id: 3,
  //         destination: 'Sydney, Austrailia',
  //         estimatedLodgingCostPerDay: 130,
  //         estimatedFlightCostPerPerson: 950,
  //         image:
  //           'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  //         alt: 'opera house and city buildings on the water with boats',
  //       },
  //     },
  //     {
  //       id: 50,
  //       userID: 1,
  //       destinationID: 16,
  //       travelers: 5,
  //       date: '2020/07/02',
  //       duration: 17,
  //       status: 'approved',
  //       suggestedActivities: [],
  //       destination: {
  //         id: 16,
  //         destination: 'Bangkok, Thailand',
  //         estimatedLodgingCostPerDay: 35,
  //         estimatedFlightCostPerPerson: 988,
  //         image:
  //           'https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
  //         alt: 'ornate buildings with a garden during the day',
  //       },
  //     },
  //     {
  //       id: 65,
  //       userID: 1,
  //       destinationID: 35,
  //       travelers: 4,
  //       date: '2020/03/21',
  //       duration: 18,
  //       status: 'approved',
  //       suggestedActivities: [],
  //       destination: {
  //         id: 35,
  //         destination: 'Anchorage, Alaska',
  //         estimatedLodgingCostPerDay: 200,
  //         estimatedFlightCostPerPerson: 100,
  //         image:
  //           'https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  //         alt: 'man riding on kayak surrounded by mountains',
  //       },
  //     },
  //     {
  //       id: 1,
  //       userID: 3,
  //       destinationID: 22,
  //       travelers: 4,
  //       date: '2018/05/22',
  //       duration: 17,
  //       status: 'pending',
  //       suggestedActivities: [],
  //       destination: {
  //         id: 22,
  //         destination: 'Rome, Italy',
  //         estimatedLodgingCostPerDay: 90,
  //         estimatedFlightCostPerPerson: 550,
  //         image:
  //           'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  //         alt: 'people standing inside a colosseum during the day',
  //       },
  //     },
  //   ])
  // })
})
