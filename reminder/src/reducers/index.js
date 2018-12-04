import { ADD_REMINDER } from "../constants";
import { DELETE_REMINDER, CLEAR_REMINDERS } from "../constants";

const reminder = action => {
  const { text, dueDate } = action; //text: action.text, dueDate: action.dueDate,
  return {
    text,
    dueDate,
    id: Math.random()
  };
};
const reminders = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_REMINDER:
      return [...state, reminder(action)];
    case DELETE_REMINDER:
      return state.filter(reminder => reminder.id !== action.id);
    case CLEAR_REMINDERS:
      return [];
    default:
      return state;
  }
};

export default reminders;
