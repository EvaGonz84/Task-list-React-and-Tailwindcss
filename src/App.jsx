import Header from "./components/header/Header";
import ComputedTask from "./components/task/ComputedTask";
import CreateTask from "./components/task/CreateTask";
import FilterTask from "./components/task/FilterTask";
import ListTask from "./components/task/ListTask";

const App = () => {
  return (
    <>
      <div className="bg-[#579BB1] pb-8">
        <Header />
      </div>
      <div className="min-h-screen bg-[#F8F4EA]	">
        <main className="container mx-auto px-4 pt-8">
          <CreateTask />
          <ListTask />
          <ComputedTask />
          <FilterTask />
        </main>
      </div>
    </>
  );
};

export default App;
