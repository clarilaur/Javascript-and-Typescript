function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

let tempC = 25;
let tempF = celsiusToFahrenheit(tempC);

console.log(`${tempC}°C is ${tempF}°F`);
console.log(`Water freezes at ${celsiusToFahrenheit(0)}°F`);
console.log(`Water boils at ${celsiusToFahrenheit(100)}°F`);
