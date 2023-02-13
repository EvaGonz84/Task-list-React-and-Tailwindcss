import { ItemTask } from "./ItemTask";

const ListTask = ({ list }) => {
  return (
    <div className="mt-8 rounded-t-md bg-white">
      {list.map((task) => {
        return (<ItemTask key={task.id} task={task} />)
      })}
    </div>
  );
};

export default ListTask;
