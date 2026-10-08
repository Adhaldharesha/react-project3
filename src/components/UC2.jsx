
import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

function Theme() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Light />
    </ThemeContext.Provider>
  );
}

function Light() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>{darkMode ? "Dark Theme" : "Light Theme"}</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Theme;
