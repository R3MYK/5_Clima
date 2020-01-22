const axios = require('axios');

const getplacelatlng = async (direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyBCcLKon2Xdu-lFs8zOZePN8OMCNBuaNvg`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion}`);
    }

    // .then(resp => {
    let location = resp.data.results[0];
    let coords = location.geometry.location;
    // console.log('Dirección', location.formatted_address);
    // console.log('lat', coords.lat);
    // console.log('lng', coords.lng)
    // console.log( JSON.stringify(resp.data.results[0], undefined, 2))
    // })
    // .catch(e => console.log('Error!!!', e));

    // Envio de Objeto
    return {
        direccion : location.formatted_address,
        lat : coords.lat,
        lng: coords.lng
    }
};



module.exports = {
    getplacelatlng
};