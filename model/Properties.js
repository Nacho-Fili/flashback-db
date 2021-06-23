const Coordinate = require("./Coordinate")
const CoordinateColumn = require('./CordinateColumn')

class Properties {
    columns = [
        new CoordinateColumn('entering'),
        new CoordinateColumn('exit'),
        new CoordinateColumn('inside'),
        new CoordinateColumn('outside'),
        new CoordinateColumn('room_menu'),
        { name: 'price', arguments: 1 }
    ]

    getColumn = columnName => this.columns.find(element => element.name === columnName)
}

module.exports = Properties