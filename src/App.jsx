import { useState } from "react";
import Header from "./components/header/Header";
import ComputedTask from "./components/task/ComputedTask";
import CreateTask from "./components/task/CreateTask";
import FilterTask from "./components/task/FilterTask";
import ListTask from "./components/task/ListTask";

//static task list
const initialStateTasks = [
  { id: 1, title: "Go to the supermarket", completed: true },
  { id: 2, title: "Cooking dinner", completed: false },
  { id: 3, title: "Go to the gym", completed: false },
  { id: 4, title: "10 minute read", completed: false },
];
const App = () => {
  //state to update tasks
  const [task, setTask] = useState(initialStateTasks);

  //method to create the task
  const createNewTask = (title) => {
    const newTask = {
      id: task.length + 1,
      title,
      completed: false,
    };
    setTask([...task, newTask]);
  };
  return (
    <>
      <div className="bg-[#579BB1] pb-8">
        <Header />
      </div>
      <div className="min-h-screen bg-[#F8F4EA]	">
        <main className="container mx-auto px-4 pt-8">
          <CreateTask newTask={createNewTask} />
          <ListTask list={task} />
          <ComputedTask />
          <FilterTask />
        </main>
      </div>
    </>
  );
};

export default App;
