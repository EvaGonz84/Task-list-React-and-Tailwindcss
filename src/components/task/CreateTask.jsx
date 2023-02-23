import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";

const CreateTask = ({ newTask }) => {
  const [title, setTitle] = useState("");
  const handleSubmitAddTask = (e) => {
    e.preventDefault();
    if (!title.trim().length > 0) {
      //Simple validation to remove empty spaces, the form is restarted
      return setTitle("");
    }
    newTask(title); //Add task
    setTitle(""); //Restart the form
  };
  return (
    <form
      onSubmit={handleSubmitAddTask}
      className="flex items-center gap-4 overflow-hidden rounded-md border border-[#579BB1] bg-white p-4 transition-all duration-1000 dark:border-gray-500 dark:bg-gray-800"
    >
      <FaRegCircle style={{ fontSize: "20px", fill: "gray" }} />
      <input
        type="text"
        placeholder="Write a new task"
        className="w-full outline-none transition-all duration-1000 dark:bg-gray-800 dark:text-gray-400"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default CreateTask;
