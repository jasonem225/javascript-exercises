const convertToCelsius = function(fahrenheit) {
  let celcius = Number(((fahrenheit - 32) * 5 / 9).toFixed(1));
  return celcius;
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = Number(((celcius * 9 / 5) + 32).toFixed(1));
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
