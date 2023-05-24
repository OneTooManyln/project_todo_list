export class project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

export const projectArray = [{ name: "My Projects" }];

class task {
  constructor(title, description, date, type, completed) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.type = type;
    this.completed = completed;
  }
}

export const taskArray = [
  {
    title: "Workout session",
    description: "",
    date: "10:00 PM",
    type: "personal",
    completed: false,
  },
  {
    title: "Grocery trip",
    description: "",
    date: "Tomorrow",
    type: "personal",
    completed: false,
  },
];

export default task;
