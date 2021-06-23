const Coordinate = require('../model/Coordinate')
const assert = require('assert')

describe('Coordinate test', () => {
    it('Coordinate is equal to an equal coordinate', () => {
        const coord1 = new Coordinate({ x: 1, y: 2, z: 3 })
        const coord2 = new Coordinate({ x: 1, y: 2, z: 3 })

        assert(coord1.equals(coord2));
    })

    it('Coordinate is not equal to a different coordinate', () => {
        const coord1 = new Coordinate({ x: 1, y: 2, z: 3 })
        const coord2 = new Coordinate({ x: 1, y: 1, z: 3 })

        assert(!coord1.equals(coord2));
    })

    it('Coordinate is equal to an equal coordinate initialized by unordered string', () => {
        const coord1 = new Coordinate({ x: 1, y: 2, z: 3 })
        const coord2 = Coordinate.createByString('{"x":1,"z":3,"y":2}')
    
        assert(coord1.equals(coord2));
    })
})