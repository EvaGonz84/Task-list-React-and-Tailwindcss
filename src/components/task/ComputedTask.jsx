const ComputedTask = ({ computedTask, clearComputedTask }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white p-4">
      <span className="text-gray-400">{computedTask} Items to complete</span>
      <button onClick={clearComputedTask} className= "text-gray-400 hover:text-black">
        Delete completed
      </button>
    </section>
  );
};

export default ComputedTask;
