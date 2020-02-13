import React from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import { loadEvents, updateEvent, deleteEvent } from "../actions/events";
import CreateEventForm from "./CreateEventForm";

class EventDetailsContainer extends React.Component {
  state = {
    editMode: false,
    currentId: Number(this.props.match.params.id)
    // currentEvent: this.props.events.find(
    //   event => event.id === Number(this.props.match.params.id)
    // )
  };
  componentDidMount() {
    // console.log(this.state.values);
    this.props.loadEvents();
  }

  onEdit = () => {
    // console.log(this); // props: [{…}, {…}] array of events, state: {editMode: true, currentId: 3}
    const editedEvent = this.props.events.find(
      event => event.id === this.state.currentId
    );
    this.setState({
      editMode: !this.state.editMode,
      values: {
        id: this.state.currentId,
        name: editedEvent.name,
        date: editedEvent.date,
        description: editedEvent.description
      }
    });
  };

  onChange = event => {
    // console.log(this); // this.state.values: {name: "ssdfdsf", date: "2020-02-20", description: "erfd"}
    this.setState({
      // [event.target.name]: event.target.value
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = event => {
    console.log("currentEvent 2", this.state);

    event.preventDefault();
    if (
      !this.state.values.name ||
      !this.state.values.date ||
      !this.state.values.description
    ) {
      window.alert("Fill all the fields");
    } else {
      this.props.updateEvent(this.state.values, this.state.currentId);
      this.setState({
        editMode: false
      });
    }
  };

  onDelete = () => {
    this.props.deleteEvent(this.state.currentId);
    // this.props.deleteEvent(this.state.currentEvent.id);
  };

  render() {
    if (!this.props.events) {
      return "Loading events...";
    } else {
      const currentId = Number(this.props.match.params.id);
      const currentEvent = this.props.events.find(
        event => event.id === currentId
      );
      // console.log("currentEvent", currentEvent);
      return (
        <div>
          {/* {console.log("currentEvent 2", currentEvent)} */}
          <EventDetails
            event={currentEvent}
            onDelete={this.onDelete}
            onEdit={this.onEdit}
          />
          {this.state.editMode === true && (
            <div>
              Edit event:
              <CreateEventForm
                event={this.props.event}
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state.values}
              />
            </div>
          )}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  // console.log("my state from EventDetailsContainer", state); // events: Array(2)
  return {
    events: state.events
    // event: state.event
  };
};

export default connect(mapStateToProps, {
  loadEvents,
  deleteEvent,
  updateEvent
})(EventDetailsContainer);
