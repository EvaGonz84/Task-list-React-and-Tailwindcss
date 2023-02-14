import { FaRegCircle, FaCheckCircle, FaTimes } from "react-icons/fa";

export const ItemTask = ({ task, updateTask, removeTask }) => {
  const { id, title, completed } = task;
  return (
    <article className="flex items-center gap-4 border-b p-4">
      <button onClick={() => updateTask(id)} className="flex-none">
        {/*check button when the task is completed*/}
        {completed ? (
          <FaCheckCircle style={{ fontSize: "20px", fill: "#579BB1" }} />
        ) : (
          <FaRegCircle style={{ fontSize: "20px", fill: "gray" }} />
        )}
      </button>
      <p
        className={
          completed ? " grow text-gray-600 line-through" : "grow text-gray-600"
        }
      >
        {title}
      </p>
      <button onClick={() => removeTask(id)} className="flex-none">
        <FaTimes className=" fill-gray-600 hover:fill-[#579BB1]" />
      </button>
    </article>
  );
};
