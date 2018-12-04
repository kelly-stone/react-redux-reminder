import { ADD_REMINDER } from "../constants";

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
    default:
      return state;
  }
};

export default reminders;
