import { useEffect } from "react";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";
const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  //renders the code every time the darkMode state changes
  useEffect(() => {
    //if darkMode is true add the dark class to the html and the app theme becomes dark
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <header className="container mx-auto px-4 md:max-w-xl">
        <div className="flex items-center justify-between py-8">
          <h1 className="text-3xl font-bold uppercase tracking-wide text-white">
            task list
          </h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <FaSun style={{ fill: "white" }} />
            ) : (
              <FaMoon style={{ fill: "white" }} />
            )}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
