const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "EVENTS_FETCHED": {
      // console.log(action);
      return action.events;
    }
    case "EVENT_CREATE_SUCCESS": {
      const newEvent = action.event;
      const updatedEvents = [
        ...state,
        {
          id: newEvent.id,
          name: newEvent.name,
          date: newEvent.date,
          description: newEvent.description
        }
      ];
      return updatedEvents;
    }
    case "EVENT_DELETED": {
      const deletedId = action.event;
      const updatedEvents = [...state].filter(event => event.id !== deletedId);
      return updatedEvents;
    }
    case "EVENT_UPDATED": {
      // console.log(action); //event: {id: 3, name: "4444", date: "2020-02-20", description: "4
      const updatedId = action.event.id;
      const updatedEvents = [...state].map(event =>
        event.id === updatedId
          ? {
              id: action.event.id,
              name: action.event.name,
              date: action.event.date,
              description: action.event.description
            }
          : event
      );
      return updatedEvents;
    }
    default: {
      return state;
    }
  }
}
