const value = document.getElementById("value");
const textValue = document.getElementById("textValue");
console.log("jsdsdsadsa ");

// axios({
//   url: "http://localhost:3000/weather?address=vietnam",
//   method: "GET",
// }).then((res) => {
//   console.log(res);
// });
const RunSearch = () => {
  const value1 = value.value;
  fetch("http://localhost:3000/weather?address=" + value1).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        textValue.innerText = data.Weather;
      }
    });
  });
};
