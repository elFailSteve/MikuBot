const Waifus = require('./Waifus/WaifusContent')

const Commands = []
const CommandsDescription = []

for(i = 0; i < Waifus.length; i++) {
    Commands.push(Waifus[i].command)
}

for (i = 0; i < Waifus.length; i++) {
    CommandsDescription.push(Waifus[i].commandDescription)
}

module.exports = {
    Commands,
    CommandsDescription
}