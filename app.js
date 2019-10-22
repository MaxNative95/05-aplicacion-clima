const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        descripcion: 'Direccion de la ciudad para obtener el clima',
        alias: 'd',
        demand: true
    }
}).argv

// lugar.getLugarLatLong(argv.direccion).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

// clima.getClima(14.630000, -90.610001)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


const getInfo = async (direccion) => {

    try {
        const coords = await lugar.getLugarLatLong(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es ${temp} grados`

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(res => console.log(res))
    .catch(err => console.log(err)) 