const { describe } = require('yargs');

const argv = require('yargs')
                  .option('h', {
                      alias: 'hasta',
                      type: 'number',
                      default: 10,
                      describe: 'cantidad de multiplicaciones'
                  })
                  .option('b', {
                     alias: 'base',
                     type: 'number',
                     demandOption: true,
                     describe: 'Toma la base de la tabla de multiplicar'
                  })
                  .option('l', {
                     alias: 'listar',
                     type: 'boolean',
                     default: false,
                     describe: 'muestra la tabla en consola'
                  })
                  .check((argv,options) => {
                     if( isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                     }
                     return true


                  })
                  .argv;

                  module.exports = argv