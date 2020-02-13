import request from "superagent";
export const EVENTS_FETCHED = "EVENTS_FETCHED";
export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";
export const EVENT_UPDATED = "EVENT_UPDATED";
export const EVENT_DELETED = "EVENT_DELETED";

const baseUrl = "http://localhost:4000";

export const loadEvents = () => (dispatch, getState) => {
  request(`${baseUrl}/event`)
    .then(response => {
      // console.log("loadEventS response", response);
      dispatch(eventsFetched(response.body));
    })
    .catch(console.error);
};
const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
});

export const createEvent = data => dispatch => {
  request
    .post(`${baseUrl}/event`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body));
    })
    .catch(console.error);
};
const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
});

export const updateEvent = data => dispatch => {
  // console.log("data from updateEvent", data); // {id: 3, name: "222", date: "2020-02-20", description: "222"}
  request
    // .get(`${baseUrl}/event/${id}`)
    .put(`${baseUrl}/event/${data.id}`)
    .send(data)
    .then(response => {
      console.log("response.body from updateEvent action", response.body);
      dispatch(eventUpdateSuccess(response.body));
    })
    .catch(console.error);
};
const eventUpdateSuccess = event => ({
  type: EVENT_UPDATED,
  event
});

export function deleteEvent(id) {
  return function thunk(dispatch) {
    request
      .delete(`${baseUrl}/event/${id}`)
      .send(id)
      .then(() => {
        dispatch(eventDeleted(id));
      })
      .catch(console.error);
  };
}
const eventDeleted = event => ({
  type: EVENT_DELETED,
  event
});
