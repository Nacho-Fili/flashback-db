const { columns } = require("./Properties")

class ManualInput {
    constructor(args, column){
        this.column = column
        this.args = args
    }

    

    stringify = () => 'Manual input'
}

module.exports = ManualInput