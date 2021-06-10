const request = require("request");
const WetherCurrent = (lati, longti, callback) => {
  if (lati && longti) {
    const url =
      "http://api.weatherstack.com/current?access_key=8f5f609734d08d3fb80442d18754114c&query=" +
      lati +
      "," +
      longti;
    request(
      {
        url: url,
        json: true,
      },
      (err, res) => {
        if (err) {
          callback("Khong ket noi dc services", undefined);
        } else if (res.body.error) {
          callback(undefined, res.body.error.info);
        } else {
          callback(undefined, res.body.current.weather_descriptions[0]);
        }
      }
    );
  } else {
    callback("Khong thay vi tri ko xac dinh dc thoi tiet ", undefined);
  }
};
module.exports = WetherCurrent;
