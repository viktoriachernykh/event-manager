import React from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
// import { loadEvent, updateEvent, deleteEvent } from "../actions/events";
import { loadEvent } from "../actions/events";
// import store from "./store";

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    // look in the redux store and find the one Event using params.id

    // if something found render the thing that was found

    // if not found dispatch event to load event from

    this.props.loadEvent(Number(this.props.match.params.id)); // works
  }

  render() {
      if (localEvent) {
        return <EventDetails event={localEvent} />;

      } else {
        return <EventDetails event={this.props.event} />;
      }
    }
    // return <EventDetails event={this.props.event} />;
  }
}

const mapStateToProps = state => {
  console.log("my state from EventDetailsContainer", state);
  return {
    event: state.events
  };
};

export default connect(mapStateToProps, { loadEvent })(EventDetailsContainer);
