import { FaMoon } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="container mx-auto px-4">
        <div className="flex items-center justify-between py-8">
          <h1 className="text-3xl font-bold uppercase tracking-wide text-white">
            task list
          </h1>
          <FaMoon style={{ fill: "white" }} />
        </div>
      </header>
    </>
  );
};

export default Header;
