import React from "react";
import { loadEvents } from "../actions/events";
import { connect } from "react-redux";
import EventsList from "./EventList";
import CreateEventFormContainer from "./CreateEventFormContainer";

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    return (
      <div>
        {(!this.props.events || !this.props || !this) && "Loading..."}
        {this.props.events && (
          <div>
            <EventsList events={this.props.events} />
            <CreateEventFormContainer />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("my state from Event List Container", state);
  return {
    events: state.events
  };
};

export default connect(mapStateToProps, { loadEvents })(EventsListContainer);
