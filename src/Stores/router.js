import { writable } from "svelte/store";

export const routes = ["home", "features", "docs"];

const createRouter = () => {
  const { subscribe, set } = writable(routes[0]);

  return {
    subscribe,
    navigate: (route) => {
      routes.includes(route) ? set(route) : console.error("Brak strony");
    },
  };
};

export const router = createRouter()