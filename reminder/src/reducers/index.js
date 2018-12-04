import { ADD_REMINDER } from "../constants";
import { DELETE_REMINDER, CLEAR_REMINDERS } from "../constants";
import { bake_cookie, read_cookie } from "sfcookies";

const reminder = action => {
  const { text, dueDate } = action; //text: action.text, dueDate: action.dueDate,
  return {
    text,
    dueDate,
    id: Math.random()
  };
};

// const reminders = (state = [], action = {}) => {

//   switch (action.type) {
//     case ADD_REMINDER:
//       return [...state, reminder(action)];
//     case DELETE_REMINDER:
//       return state.filter(reminder => reminder.id !== action.id);
//     case CLEAR_REMINDERS:
//       return [];
//     default:
//       return state;
//   }
// };
//above is before store in cookie

const reminders = (state = read_cookie("reminders"), action = {}) => {
  let reminders = null; //each case return, keep in the cookie

  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      bake_cookie("reminders", reminders);
      return reminders;

    case DELETE_REMINDER:
      reminders = state.filter(reminder => reminder.id !== action.id);
      bake_cookie("reminders", reminders);
      return reminders;

    case CLEAR_REMINDERS:
      reminders = [];
      bake_cookie("reminders", reminders);
      return reminders;

    default:
      return state;
  }
};
export default reminders;
