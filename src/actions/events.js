import request from "superagent";
export const EVENTS_FETCHED = "EVENTS_FETCHED";
export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";
export const ONE_EVENT_FETCHED = "ONE_EVENT_FETCHED";

const baseUrl = "http://localhost:4000";

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
});

// componentDidMount() {
//   const breed = this.props.match.params.breed;
//   fetch(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
//     .then(res => res.json())
//     .then(data => this.updateImages(data.message))
//     .catch(console.error);
// }

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events) return;
  // a GET /events request
  request(`${baseUrl}/event`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body));
    })
    .catch(console.error);
};

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
});

export const createEvent = data => dispatch => {
  request
    .post(`${baseUrl}/event`)
    .send(data)
    .then(response => {
      // console.log(response);
      dispatch(eventCreateSuccess(response.body));
    })
    .catch(console.error);
};

const eventFetched = eventId => ({
  type: ONE_EVENT_FETCHED,
  eventId
});

export const loadEvent = id => (dispatch, getState) => {
  // console.log(id); // returns 4
  dispatch(eventFetched(id));
};

// export const loadEvent = id => (dispatch, getState) => {
//   // console.log(id); // returns 4
//   request(`${baseUrl}/event/${id}`)
//     .then(response => {
//       // console.log(response); // returns object with proper id and all the properties
//       dispatch(eventFetched(response.body));
//     })
//     .catch(console.error);
// };
