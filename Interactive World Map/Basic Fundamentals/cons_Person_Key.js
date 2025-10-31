const person = { name: "John", age: 30, city: "NYC" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
