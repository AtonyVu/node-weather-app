const request = require("request");
const geocode = (address, callback) => {
  const urlGeo =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoibHVhbmNhdXRodSIsImEiOiJja3BrbmdrMWUwam9kMm9xazZ1eWY1c2VrIn0.A_ddO7HbDcAfOIArx33lQw&limit=1";
  request({ url: urlGeo, json: true }, (err, res) => {
    if (err) {
      callback(" Khong ket noi dc toi service");
      return undefined;
    } else if (res.body.message) {
      callback(undefined, res.body.message);
      return undefined;
    } else if (res.body.features.length === 0) {
      callback("khong tim dc vi tri nao", undefined);
      return undefined;
    } else {
      const lati = res.body.features[0].center[1];
      const longti = res.body.features[0].center[0];
      callback(undefined, {
        lati,
        longti,
      });
    }
  });
};
module.exports = geocode;
