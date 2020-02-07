const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "EVENTS_FETCHED": {
      return action.events;
    }
    case "EVENT_CREATE_SUCCESS": {
      const newEvent = action.event;
      // console.log("newEvent", newEvent);
      const updatedEvents = [
        ...state,
        {
          id: newEvent.id,
          name: newEvent.name,
          date: newEvent.date,
          description: newEvent.description
        }
      ];
      // console.log("updatedEvents", updatedEvents);
      return updatedEvents;
    }
    // case "ONE_EVENT_FETCHED": {
    //   // console.log("action.event from reducer", action.event);
    //   return action.event;
    // }
    case "ONE_EVENT_FETCHED": {
      // console.log("action.event from reducer", action.eventId);
      return action.eventId;
    }
    default: {
      return state;
    }
  }
}
