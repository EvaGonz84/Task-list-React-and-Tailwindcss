import { FaRegCircle } from "react-icons/fa";

const CreateTask = () => {
  return (
    <form className="flex items-center gap-4 overflow-hidden rounded-md border border-[#579BB1] bg-white p-4">
      <FaRegCircle style={{ fontSize: "20px", fill: "gray" }} />
      <input
        type="text"
        placeholder="write a new task"
        className="w-full outline-none"
      />
    </form>
  );
};

export default CreateTask;
