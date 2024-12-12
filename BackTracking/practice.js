const person = { name: "Alice" };

function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}
greet.call(person, "Hello"); // Output: Hello, Alice!
greet.apply(person, ["Hi"]); // Output: Hi, Alice!
greet.bind(person)("Hey"); // Output: Hey, Alice!
