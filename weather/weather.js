const axios = require('axios');
const getWeather = async(lat, lng) => {
    // console.log(lat);
    // console.log(lng);
    // axios
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=1cd6f0e22abc890455c83e5e8398b69d`)
    return  resp.data.main.temp;
};

module.exports = {
    getWeather
};