const WetherCurrent = require("./WeatherCurrent");
const WeatherCurrent = require("./WeatherCurrent");
const printInfo = (err, res) => {
  if (err) {
    console.log(err);
  }
  if (res) {
    console.log(res);
  }
  WetherCurrent(res.lati, res.longti);
};
module.exports = printInfo;
