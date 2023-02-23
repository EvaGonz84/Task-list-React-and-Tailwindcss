const FilterTask = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-center gap-4 rounded-md bg-white p-4 transition-all duration-1000 dark:bg-gray-800">
        <button
          onClick={() => changeFilter("All")}
          className={
            filter === "All"
              ? "text-[#579BB1] dark:text-white"
              : "hover:text-[#579BB1] dark:text-gray-400 dark:hover:text-white"
          }
        >
          All
        </button>
        <button
          onClick={() => changeFilter("Active")}
          className={
            filter === "Active"
              ? "text-[#579BB1] dark:text-white"
              : "hover:text-[#579BB1] dark:text-gray-400 dark:hover:text-white"
          }
        >
          Active
        </button>
        <button
          onClick={() => changeFilter("Completed")}
          className={
            filter === "Completed"
              ? "text-[#579BB1] dark:text-white"
              : "hover:text-[#579BB1] dark:text-gray-400 dark:hover:text-white"
          }
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default FilterTask;
