import { ItemTask } from "./ItemTask";

const ListTask = ({ list, updateTask, removeTask }) => {
  return (
    <div className="mt-8 rounded-t-md bg-white">
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
