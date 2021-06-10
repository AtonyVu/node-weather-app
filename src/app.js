const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const WetherCurrent = require("./utils/WeatherCurrent");
const publicDir = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials");
//////////////////////////////set up handlebars va custom views //////////////
const viewPath = path.join(__dirname, "../templates/views");
app.set("view engine", "hbs");
app.set("views", viewPath); //phai co lun 2 dong tren, 1 cai tro toi thu muc , 1 cai tro toi hbs
hbs.registerPartials(partialsPath);
////// setup wed tinh ///////////
app.use(express.static(publicDir)); //// theo doi thu muc public set tỉnh css, js
////////////////////////////////
app.get("", (req, res) => {
  res.render("index", {
    title: "ok roi do ",
    body: "chua ook dau ",
    name: "Luan",
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about ne", name: "LUAN" });
});
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({ error: "Chua nhan duoc thong tin tiem kiem" });
  } else {
    geocode(req.query.address, (err, { lati, longti } = {}) => {
      if (err) {
        return res.send({
          error: err,
        });
      }
      // if (res) {
      //   console.log(res);
      // }
      WetherCurrent(lati, longti, (err, ress) => {
        if (err) {
          return res.send({
            error: err,
          });
        }
        if (ress) {
          res.send({
            Location: req.query.address,
            lati,
            longti,
            Weather: ress,
          });
        }
      });
    });
  }
});

app.get("/about/*", (req, res) => {
  res.render("404_page", { erms: "about" });
});
app.get("*", (req, res) => {
  res.render("404_page", { erms: "ALL" });
});
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
