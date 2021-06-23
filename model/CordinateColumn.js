const Coordinate = require("./Coordinate")

class CoordinateColumn{
    constructor(name){
        this.name = name
    }

    setValue = (firsIndex, argv) => {
        this.value = new Coordinate({ x: argv[firsIndex], y: argv[firsIndex + 1], z: argv[firsIndex + 2]})
    }

    stringifyValue = () => this.value.stringify()
}

module.exports = CoordinateColumn