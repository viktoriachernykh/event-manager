import React from "react";
import { Link } from "react-router-dom";

export default class EventDetails extends React.Component {
  componentDidMount() {
    // console.log("this from EventDetails componentDidMount", this);
  }
  // handleDelete = id => {
  //   console.log(id);
  //   this.props.createEvent(this.state);
  // };

  render() {
    return (
      <div>
        <Link to={`/`}>Go to Event List</Link>
        {!this.props.event && "Loading..."}
        {this.props.event && (
          <div>
            {console.log("props inside render", this.props.event) // here is my id
            }
            <h1>{this.props.event.name}</h1>
            <i>Date: {this.props.event.date}</i>
            <p>{this.props.event.description}</p>
            {/* <button onClick={this.handleDelete(this.props.event.id)}>
              <Link to={`/`}>Delete event</Link>
            </button> */}
          </div>
        )}
      </div>
    );
  }
}

// export default function EventDetails(event) {
//   console.log("EVENT DETAILS PROPS", event);
//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   );
// }
