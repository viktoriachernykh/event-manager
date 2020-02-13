import React from "react";
import { connect } from "react-redux";
import { createEvent } from "../actions/events";
import CreateEventForm from "./CreateEventForm";

class CreateEventFormContainer extends React.Component {
  state = {
    name: "",
    date: "",
    description: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    // console.log(this.state); // returns name, date, description values from the form
    event.preventDefault();
    if (!this.state.name || !this.state.date || !this.state.description) {
      window.alert("Fill all the fields");
    } else {
      this.props.createEvent(this.state);
      this.setState({
        name: "",
        date: "",
        description: ""
      });
    }
  };

  render() {
    return (
      <div>
        Add event:
        <CreateEventForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

export default connect(null, { createEvent })(CreateEventFormContainer);
