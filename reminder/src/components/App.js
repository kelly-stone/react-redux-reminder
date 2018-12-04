import React, { Component } from "react";
import { connect } from "react-redux";
import { addReminder, deleteReminder, clearReminds } from "../actions";
import PropTypes from "prop-types";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      dueDate: ""
    };
  }
  addReminder() {
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  clearReminds() {
    this.props.clearReminds();
  }

  renderReminder() {
    const { reminders } = this.props;
    // console.log(this.props);
    return (
      <ul className="list-group col-sm-8 mt-2">
        {reminders.map(reminder => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div className="list-item">
                <div>{reminder.text}</div>
                <div>
                  <em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
                </div>
                <div
                  className="list-item delete-button"
                  onClick={() => this.deleteReminder(reminder.id)}
                >
                  &#x2715;
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="title"> Reminder pro</div>

        <div className="form-inline">
          <div className="form-group mr-4">
            <input
              type="text"
              className="form-control mr-4"
              placeholder=" I have to .."
              onChange={event => this.setState({ text: event.target.value })}
            />
            <input
              type="datetime-local"
              className="form-control"
              onChange={event => this.setState({ dueDate: event.target.value })}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Add Reminder
          </button>
        </div>
        {this.renderReminder()}
        <div
          className="btn btn-danger mt-3"
          onClick={() => this.clearReminds()}
        >
          Clear Reminders
        </div>
      </div>
    );
  }
}

App.propTypes = {
  reminders: PropTypes.array.isRequired,
  addReminder: PropTypes.func.isRequired,
  deleteReminder: PropTypes.func.isRequired,
  clearReminder: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    reminders: state //call reminders in reducers
  };
};

export default connect(
  mapStateToProps,
  { addReminder, deleteReminder, clearReminds }
)(App);
