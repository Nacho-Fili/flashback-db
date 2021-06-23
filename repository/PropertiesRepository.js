const Coordinate = require('../model/Coordinate')

const propertiesRepository = {
    
    update: ({ id, column, connection, input }) => {
        connection.query(`UPDATE properties SET ${column.name}='${column.stringifyValue()}' WHERE id =${id}`)
    },
    
    getCoordinateOf: ({id, column, connection}) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT ${column} FROM properties WHERE id=${id}`, (error, result) => {
                if(error) return reject
                else resolve(Coordinate.createByString(result[0][column]))        
            })
        })
    }
    
}


module.exports = propertiesRepository; 