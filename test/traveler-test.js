import chai from 'chai'
const expect = chai.expect
import Traveler from '../src/Traveler'

describe('Activity', () => {
  let traveler
  let testTravelerData1
  let testTravelerData2
  let testTravelerData3

  beforeEach(() => {
    testTravelerData1 = {
      id: 1,
      name: 'Ham Leadbeater',
      travelerType: 'relaxer',
    }
    testTravelerData2 = {
      id: 3,
      name: 'Sibby Dawidowitsch',
      travelerType: 'shopper',
    }
    testTravelerData3 = {
      id: 5,
      name: 'Tiffy Grout',
      travelerType: 'thrill-seeker',
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
    expect(traveler.id).to.equal(1)
  })

  it('should have a name', () => {
    expect(traveler.name).to.equal('Ham Leadbeater')
  })
})
