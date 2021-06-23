const mysql = require('mysql')
const SERVER_DATABASE_CREDENTIALS = require('./config/database.js')
const repositories = require('./repositories.js')
const ManualInput = require('./model/ManualInput')
const CSVReader = require('./model/CSVReader')
const entities = require('./entities')

const REPOSITORY = 2
const COLUMN = 3
const ID = 4
const INPUT = 5
const FIRST_VALUE_PARAMETER = 6

const repo = repositories[process.argv[REPOSITORY]]
const column = entities[process.argv[REPOSITORY]].getColumn(process.argv[COLUMN])
column.setValue(FIRST_VALUE_PARAMETER, process.argv)
const id = process.argv[ID]
let input

if(process.argv[INPUT] === 'csv') input = new CSVReader(process.argv, column)
if(process.argv[INPUT] === 'manual') input = new ManualInput()

const connection = mysql.createConnection(SERVER_DATABASE_CREDENTIALS)

repo.update({ id, column, connection, input  })

connection.end()