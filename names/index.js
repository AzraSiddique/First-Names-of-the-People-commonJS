const peoplesNames = require("../country/state/city/index");
const firstNames = require("../utilities/utils/index");

function getPeopleInCity(peoplesNames) {
  return firstNames(peoplesNames);
}

module.exports = getPeopleInCity;
