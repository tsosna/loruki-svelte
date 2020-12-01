import { writable } from "svelte/store";

// Variables
export const themes = {
  light: {
    colorPrimary: "#0456ed",
    colorSecondary: "#1c3fa8",
    colorDark: "#002240",
    colorLight: "#f4f4f4",
    colorInfo: "#5c8cb8",
    colorSuccess: "#5cb85c",
    colorError: "#d9534f",
  },
  dark: {
    colorPrimary: "#002240",
    colorSecondary: "#1c3fa8",
    colorDark: "#0456ed",
    colorLight: "#f4f4f4",
    colorInfo: "#5c8cb8",
    colorSuccess: "#5cb85c",
    colorError: "#d9534f",
  },
};

const setTheme = (theme) => {
  const root = document.documentElement;
  for (const [key, value] of Object.entries(theme)) {
    root.style.setProperty("--" + key, value);
  }
  localStorage.setItem("theme", JSON.stringify(theme));
};

const createCurrentTheme = () => {
  const themeFromStorage = JSON.parse(localStorage.getItem("theme"));

  const { subscribe, set } = writable(themeFromStorage);

  return {
    subscribe,
    change: (theme) => {
      setTheme(theme);
      set(theme);
    },
  };
};

export const currentTheme = createCurrentTheme();
