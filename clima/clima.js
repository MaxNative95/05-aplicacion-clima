const axios = require('axios');

const getClima = async(lat, lng) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=379a0c621f41a44b68d8d439cceefe49&units=metric`)

    return res.data.main.temp;
}


module.exports = {
    getClima
}