class Coordinate{
    constructor({x, y, z}){
        this.x = x
        this.y = y
        this.z = z
    }

    stringify = () => `{"x":${this.x},"y":${this.y},"z":${this.z}}`

    equals = coordinate => coordinate.x == this.x && coordinate.y == this.y && coordinate.z == this.z
}

Coordinate.createByString = str => {
    const xIndex = str.indexOf("x")
    const yIndex = str.indexOf("y") 
    const zIndex = str.indexOf("z") 

    const arrayIndex = [xIndex, yIndex, zIndex]
    arrayIndex.sort((a,b) => a - b)

    const x = arrayIndex.indexOf(xIndex) != 2 
    ? str.substring(arrayIndex[arrayIndex.indexOf(xIndex)] + 3, arrayIndex[arrayIndex.indexOf(xIndex) + 1] - 2)
    : str.substring(arrayIndex[arrayIndex.indexOf(xIndex)] + 3, str.length - 1)

    const y = arrayIndex.indexOf(yIndex) != 2
    ? str.substring(arrayIndex[arrayIndex.indexOf(yIndex)] + 3, arrayIndex[arrayIndex.indexOf(yIndex) + 1] - 2)
    : str.substring(arrayIndex[arrayIndex.indexOf(yIndex)] + 3, str.length - 1)

    const z = arrayIndex.indexOf(zIndex) != 2
    ? str.substring(arrayIndex[arrayIndex.indexOf(zIndex)] + 3, arrayIndex[arrayIndex.indexOf(zIndex) + 1] - 2)
    : str.substring(arrayIndex[arrayIndex.indexOf(zIndex)] + 3, str.length - 1)

    const coordinate = new Coordinate({
        'x': x,
        'y': y,
        'z': z
    }) 


    return coordinate
}

module.exports = Coordinate