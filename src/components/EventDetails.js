import React from "react";
import { Link } from "react-router-dom";

export default class EventDetails extends React.Component {
  // componentDidMount() {
  //   console.log("this from EventDetails componentDidMount", this);
  // }
  render() {
    return (
      <div>
        <Link to={"/"}>Go to Event List</Link>
        {!this.props.event && "Loading..."}
        {this.props.event && (
          <div>
            <h1>{this.props.event.name}</h1>
            <i>Date: {this.props.event.date}</i>
            <p>{this.props.event.description}</p>
            <button onClick={this.props.onDelete}>
              <Link to={"/"}>Delete event</Link>
            </button>
            <button onClick={this.props.onEdit}>Edit event</button>
          </div>
        )}
      </div>
    );
  }
}
