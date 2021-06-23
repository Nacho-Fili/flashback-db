const databaseAccess = require("./cfg/testDatabase")
const repository = require('../repository/PropertiesRepository')
const mysql = require('mysql')
const assert = require("assert")
const Coordinate = require('../model/Coordinate')

const coordinateToPut = new Coordinate({x: 09.00, y:12.00, z:2018.00})

const parameters = {
    id: 37,
    coordinate: coordinateToPut,
    column: 'entering'
}


describe('PropertiesRepository Test', () => {
    it('The repository can update info correctly', async () => {
        const connection = mysql.createConnection(databaseAccess)
        connection.connect(
            err =>{ 
                if(err){ 
                    console.log('error en la conexion')
                    console.log(err)
                }
            }
        )

        parameters.connection = connection 

        const firstCoordinate = await repository.getCoordinateOf({ id: parameters.id, column: parameters.column, connection: parameters.connection })

        await repository.addCoordinateTo(parameters)
        const modifiedCoordinate = await repository.getCoordinateOf({ id: parameters.id, column: parameters.column, connection: parameters.connection })

        parameters.coordinate = firstCoordinate
        await repository.addCoordinateTo(parameters)

        connection.end(err => { console.log(err ? 'Error al finalizar la conexion' : 'conexion finalizada') })

        assert(modifiedCoordinate.equals(coordinateToPut))
    })
})
