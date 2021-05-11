const {creararchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();


 // const base = 5;

 creararchivo(argv.b, argv.l, argv.h)
   .then( nombrearchivo => console.log(nombrearchivo, 'creado'))
   .catch( err => console.log(err))