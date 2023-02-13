const FilterTask = () => {
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-center gap-4 rounded-md bg-white p-4">
        <button className="text-[#579BB1]">All</button>
        <button className="hover:text-[#579BB1]">Active</button>
        <button className="hover:text-[#579BB1]">Completed</button>
      </div>
    </section>
  );
};

export default FilterTask;
