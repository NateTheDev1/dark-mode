import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, value) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, value);
  if (darkMode) {
    let body = document.querySelector("body");
    body.classList.add("dark-mode");
  } else {
    let body = document.querySelector("body");
    body.classList.remove("dark-mode");
  }
  return [darkMode, setDarkMode];
};

export default useDarkMode;
