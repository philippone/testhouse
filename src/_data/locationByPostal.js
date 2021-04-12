const locations = require('./locations.json');

const locationsByPostal = {};

for(const location of locations) {

    if (!locationsByPostal[location.postal]) {
        locationsByPostal[location.postal] = [location];
    } else {
        locationsByPostal[location.postal].push(location)
    }

}


module.exports = locationsByPostal;
//
// module.exports = [
//     {
//         "name": "Stengel-Apotheke",
//         "tel": "0681/52363",
//         "street": "Eisenbahnstr.",
//         "number": "25",
//         "city": "Saarbrücken",
//         "postal": "66117"
//     }
// ];