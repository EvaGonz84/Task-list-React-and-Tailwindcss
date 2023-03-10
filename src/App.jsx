import { useEffect, useState } from "react";
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
      id: Date.now(),
      title,
      completed: false,
    };
    setTask([...task, newTask]);
  };

  //method to update task
  const updateTask = (id) => {
    //when the task matches the id, the task is copied updating the status. otherwise it returns the task without updating
    setTask(
      task.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  //method to remove task
  const removeTask = (id) => {
    //filter to return tasks opposite to received id
    setTask(task.filter((item) => item.id !== id));
  };
  //number of tasks completed
  const computedTask = task.filter((item) => !item.completed).length;
  //method to delete completed tasks
  const clearComputedTask = () => {
    setTask(task.filter((item) => !item.completed));
  };

  //state containing 3 filters
  const [filter, setFilter] = useState("All");
  //method to filter
  const filteredTasks = () => {
    switch (filter) {
      case "All":
        return task;
      case "Active":
        return task.filter((item) => !item.completed);
      case "Completed":
        return task.filter((item) => item.completed);
    }
  };
  //filter value to pass as prop
  const changeFilter = (filter) => setFilter(filter);
  return (
    <>
      <div className="bg-[#579BB1] pb-8 transition-all duration-1000 dark:bg-[#51557E]">
        <Header />
      </div>
      <div className="min-h-screen bg-[#F8F4EA] transition-all duration-1000 dark:bg-gray-900 ">
        <main className="container mx-auto px-4 py-8 md:max-w-xl">
          <CreateTask newTask={createNewTask} />
          <ListTask
            list={filteredTasks()}
            updateTask={updateTask}
            removeTask={removeTask}
          />
          <ComputedTask
            computedTask={computedTask}
            clearComputedTask={clearComputedTask}
          />
          <FilterTask changeFilter={changeFilter} filter={filter} />
        </main>
      </div>
    </>
  );
};

export default App;
