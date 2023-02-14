const FilterTask = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-center gap-4 rounded-md bg-white p-4">
        <button
          onClick={() => changeFilter("All")}
          className={
            filter === "All" ? "text-[#579BB1]" : "hover:text-[#579BB1]"
          }
        >
          All
        </button>
        <button
          onClick={() => changeFilter("Active")}
          className={
            filter === "Active" ? "text-[#579BB1]" : "hover:text-[#579BB1]"
          }
        >
          Active
        </button>
        <button
          onClick={() => changeFilter("Completed")}
          className={
            filter === "Completed" ? "text-[#579BB1]" : "hover:text-[#579BB1]"
          }
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default FilterTask;
