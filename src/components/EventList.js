import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EventList extends Component {
  // componentDidMount() {
  //   console.log("this from EventList componentDidMount", this);
  // }
  render() {
    return (
      <div>
        <h1>Events list</h1>
        {!this.props.events && "Loading..."}
        {this.props.events && (
          <div>
            <p>We have {this.props.events.length} events!</p>
            <ul>
              {this.props.events.map(event => (
                <li key={event.id}>
                  <Link to={`/event/${event.id}`}>{event.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
