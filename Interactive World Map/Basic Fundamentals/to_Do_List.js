let todos = ["Buy groceries", "Walk the dog", "Study JavaScript"];

todos.push("Call mom");
todos.splice(1, 1);
console.log("My To-Do List:");
todos.forEach((task, index) => console.log(`${index + 1}. ${task}`));
