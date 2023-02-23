import { ItemTask } from "./ItemTask";

const ListTask = ({ list, updateTask, removeTask }) => {
  return (
    <div className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-1000 dark:bg-gray-800">
      {list.map((task) => {
        return (
          <ItemTask
            updateTask={updateTask}
            removeTask={removeTask}
            key={task.id}
            task={task}
          />
        );
      })}
    </div>
  );
};

export default ListTask;
