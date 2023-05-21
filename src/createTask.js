/* class project {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }
} */

export const taskArray = [
  { title: "Workout session", description: "", date: "10:00 PM" },
  { title: "Grocery trip", description: "", date: "Tomorrow" },
];

class task {
  constructor(title, description, date, type, completed) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.type = type;
    this.completed = completed;
  }
}

export default task;
