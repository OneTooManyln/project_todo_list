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

export const projectArray = [
  {
    name: "My Project",
    id: 1,
    tasks: [
      {
        title: "Workout session",
        description: "",
        date: "2023-05-30",
        type: "personal",
        completed: false,
      },
      {
        title: "Grocery trip",
        description: "",
        date: "2023-05-31",
        type: "personal",
        completed: false,
      },
    ],
  },
  {
    name: "My Newer Project",
    id: 2,
    tasks: [
      {
        title: "Do Homework",
        description: "Finish Learning ABC's",
        date: "2023-05-31",
        type: "personal",
        completed: true,
      },
    ],
  },
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

export const taskArray = [];

export default task;
