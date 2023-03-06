import { useContext, createContext, useReducer } from "react";

const ThemeContext = createContext();

const THEMES = {
  red: {
    name: "red",
    primary: "#dc2626",
    secondary: "#f87171",
  },
  orange: {
    name: "orange",
    primary: "#ea580c",
    secondary: "#fb923c",
  },
  green: {
    name: "green",
    primary: "#059669",
    secondary: "#34d399",
  },
  blue: {
    name: "blue",
    primary: "#0284c7",
    secondary: "#38bdf8",
  },
  violet: {
    name: "violet",
    primary: "#7c3aed",
    secondary: "#a78bfa",
  },
};

export const THEME_NAMES = Object.keys(THEMES);

const themeReducer = (state, { theme }) => {
  if (theme) {
    return THEMES[theme];
  } else {
    return THEMES[
      THEME_NAMES[(THEME_NAMES.indexOf(state.name) + 1) % THEME_NAMES.length]
    ];
  }
};

function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(
    themeReducer,
    THEMES[THEME_NAMES[Math.floor(Math.random() * THEME_NAMES.length)]]
  );
  const { primary, secondary } = state;
  return (
    <ThemeContext.Provider value={{ primary, secondary, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeContext");
  }
  return context;
}

export { ThemeProvider, useTheme };
