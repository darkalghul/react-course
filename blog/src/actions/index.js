import jsonPlaceholder from "../api/jsonPlaceholder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
   await dispatch(fetchPosts());

   // Original Code
   // const userIds = _.uniq(_.map(getState().posts, "userId"));
   // userIds.forEach(id => dispatch(fetchUser(id)));

   // Refractor Code Using Lodash Chain
   _.chain(getState().posts)
      .map("userId")
      .uniq()
      .forEach(id => dispatch(fetchUser(id)))
      .value();
};

export const fetchPosts = () => async dispatch => {
   const response = await jsonPlaceholder.get("/posts");

   dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// Original Action
export const fetchUser = userId => async dispatch => {
   const response = await jsonPlaceholder.get(`/users/${userId}`);

   dispatch({ type: "FECTH_USER", payload: response.data });
};

// Using Memoize
// export const fetchUser = userId => dispatch => _fetchUser(userId, dispatch);

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//    const response = await jsonPlaceholder.get(`/users/${userId}`);

//    dispatch({ type: "FECTH_USER", payload: response.data });
// });
