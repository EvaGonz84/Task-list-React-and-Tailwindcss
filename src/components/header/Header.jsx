import { FaMoon, FaCheckCircle, FaTimes, FaRegCircle } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="bg-[#579BB1] pb-8">
        <header className="container mx-auto px-4">
          <div className="flex items-center justify-between py-8">
            <h1 className="text-3xl font-bold uppercase tracking-wide text-white">
              task list
            </h1>
            <FaMoon style={{ fill: "white" }} />
          </div>
        </header>
      </div>

      <div className="min-h-screen bg-[#F8F4EA]	">
        <main className="container mx-auto px-4 pt-8">
          {/* CreateTask component */}
          <form className="flex items-center gap-4 overflow-hidden rounded-md border border-[#579BB1] bg-white p-4">
            <FaRegCircle style={{ fontSize: "20px", fill: "gray" }} />
            <input
              type="text"
              placeholder="write a new task"
              className="w-full outline-none"
            />
          </form>
          {/* TaskList component (with TaskItems)-Contains update and delete functions*/}
          <div className="mt-8 rounded-t-md bg-white">
            <article className="flex items-center gap-4 border-b p-4">
              <button className="flex-none">
                <FaCheckCircle />
              </button>
              <p className="grow text-gray-600">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <button className="flex-none">
                <FaTimes />
              </button>
            </article>
            <article className="flex items-center gap-4 border-b p-4">
              <button className="flex-none">
                <FaCheckCircle />
              </button>
              <p className="grow text-gray-600">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <button className="flex-none">
                <FaTimes />
              </button>
            </article>
            <article className="flex items-center gap-4 border-b p-4">
              <button className="flex-none">
                <FaCheckCircle />
              </button>
              <p className="grow text-gray-600">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <button className="flex-none">
                <FaTimes />
              </button>
            </article>
          </div>
          {/* TaskComputed component */}
          <section className="flex justify-between rounded-b-md bg-white p-4">
            <span className="text-gray-400">5 Items</span>
            <button className="text-gray-400">Delete completed</button>
          </section>
          {/* TaskFilter component */}
          <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4">
              <button className="text-[#579BB1]">All</button>
              <button className="hover:text-[#579BB1]">Active</button>
              <button className="hover:text-[#579BB1]">Completed</button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Header;
