const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la table de multiplicar'
                })
                .check( (argv, options) => {
                    if ( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un numero'
                    }
                    return true
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false,
                    default: false,
                    describe: 'Muestra la table en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: false,
                    describe: 'Muestra el limite para generar la multiplicacion'
                })
                .argv;


module.exports = argv;