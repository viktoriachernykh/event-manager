import React from "react";

export default function CreateEventForm(props) {
  return (
    <div>
      <form onSubmit={event => props.onSubmit(event)}>
        {/* <form onSubmit={event => props.onSubmit(event)}> */}
        Name:
        <input
          type="text"
          name="name"
          onChange={props.onChange}
          // onChange={event => props.onChange(event)}
          value={props.values.name}
        />
        <br />
        Date:
        <input
          type="date"
          name="date"
          onChange={props.onChange}
          value={props.values.date}
        />
        <br />
        Description:
        <input
          type="text"
          name="description"
          onChange={props.onChange}
          value={props.values.description}
        />
        <br />
        {/* <button type="submit" value="Add event">
          Create event
        </button> */}
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}
