const projectArray = JSON.parse(localStorage.getItem("projects")) || [
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

export default projectArray;
