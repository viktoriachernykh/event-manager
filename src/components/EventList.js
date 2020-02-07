import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EventList extends Component {
  // renderEvent(event) {
  //   return (
  //     <li key={event.id}>
  //       <Link to={`/event/${event.id}`}>{event.name}</Link>
  //     </li>
  //   );
  // }

  render() {
    return (
      <div>
        <h1>Events list</h1>
        {!this.props.events && "Loading..."}
        {this.props.events && (
          <div>
            <p>We have {this.props.events.length} events!</p>
            {/* <ul>{this.props.events.map(this.renderEvent)}</ul> */}
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

// export default class DogsList extends Component {
//   renderDogBreed(breed) {
//     return (
//       <li key={breed}>
//         <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
//       </li>
//     );
//   }
//   render() {
//     const { dogBreeds } = this.props;
//     return (
//       <div className="dogs-list">
//         <h1>Dogs List</h1>
//         {!dogBreeds && "Loading..."}
//         {dogBreeds && <ul>{dogBreeds.map(this.renderDogBreed)}</ul>}
//       </div>
//     );
//   }
// }
