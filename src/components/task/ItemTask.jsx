import { FaRegCircle, FaCheckCircle, FaTimes } from "react-icons/fa";

export const ItemTask = ({ task, updateTask, removeTask }) => {
  const { id, title, completed } = task;
  return (
    <article className="flex items-center gap-4 border-b p-4 dark:bg-gray-800">
      <button onClick={() => updateTask(id)} className="flex-none">
        {/*check button when the task is completed*/}
        {completed ? (
          <FaCheckCircle className=" fill-[#579BB1] text-[20px] dark:fill-white" />
        ) : (
          <FaRegCircle style={{ fontSize: "20px", fill: "gray" }} />
        )}
      </button>
      <p
        className={
          completed
            ? " grow text-gray-600 line-through dark:text-gray-300"
            : "grow text-gray-600 dark:text-gray-300"
        }
      >
        {title}
      </p>
      <button onClick={() => removeTask(id)} className="flex-none">
        <FaTimes className=" fill-gray-600 hover:fill-black dark:hover:fill-white" />
      </button>
    </article>
  );
};
