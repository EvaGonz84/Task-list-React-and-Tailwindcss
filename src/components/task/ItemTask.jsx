import { FaCheckCircle, FaTimes } from "react-icons/fa";

export const ItemTask = ({ task }) => {
  const { id, title, completed } = task;
  return (
    <article className="flex items-center gap-4 border-b p-4">
      <button className="flex-none">
        <FaCheckCircle />
      </button>
      <p className="grow text-gray-600">{title}</p>
      <button className="flex-none">
        <FaTimes />
      </button>
    </article>
  );
};
