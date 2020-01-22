
const place = require('./place/place');
const weather = require('./weather/weather');
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

let getInfo = async(direccion) => {
    try {
        let coors = await place.getplacelatlng(direccion);
        let temp = await weather.getWeather(coors.lat, coors.lng);
        return `El Clima en ${coors.direccion} es de  ${temp}`;
    }
    catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }

};

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

// place.getplacelatlng(argv.direccion)
//     .then(resp =>{
//         console.log(resp)
//     })
//     .catch(e => console.log(e));

// weather.getWeather(-33.4488897, -70.66926549999999)
// .then(temp => console.log(temp))
// .catch( e=> console.log(e));