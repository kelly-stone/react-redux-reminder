import { ADD_REMINDER } from "../constants";

export const addReminder = (text, dueDate) => ({
  type: ADD_REMINDER,
  text,
  dueDate
});
