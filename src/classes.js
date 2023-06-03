export class project {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

class task {
  constructor(title, description, date, type, completed) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.type = type;
    this.completed = completed;
  }
}

export const taskArray = [];

export default task;
