
const place = require('./place/place');
const direccion = {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
};

// Llamada directa de command
const argv = require('yargs').options({
    direccion
}).argv;

console.log(argv.direccion);

place.getplacelatlng(argv.direccion)
    .then(resp =>{
        console.log(resp)
    })
    .catch(e => console.log(e));