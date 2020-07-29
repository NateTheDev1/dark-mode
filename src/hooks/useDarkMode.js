import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (key, value) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, value);

  useEffect(() => {
    if (darkMode) {
      let body = document.querySelector("body");
      body.classList.add("dark-mode");
    } else {
      let body = document.querySelector("body");
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return [darkMode, setDarkMode, toggleMode];
};

export default useDarkMode;
