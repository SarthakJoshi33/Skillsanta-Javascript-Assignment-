function Fahrenheit_To_Celsius(temperature) {
  temperature = parseFloat(temperature);
  console.log(temperature + "°F is " +((temperature-32) / 1.8) + "°C");
}
function Celsius_To_Fahrenheit(temperature) {
  temperature = parseFloat(temperature);
  console.log(temperature + "°C is " + ((temperature * 1.8)+32) + "°F" );
}
Fahrenheit_To_Celsius(30);
Celsius_To_Fahrenheit(30);
