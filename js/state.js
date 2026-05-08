import { getTasks } from "./storage.js";

export const state = {
  tasks: getTasks(),
  filter: "all"
};