// sync
const addUsersToStore = (usersJSON) => ({
  type: "ADD_USERS_TO_STORE",
  usersData: usersJSON.data,
});
// async
export const fetchUsers = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/users")
      .then((response) => response.json())
      .then((usersJSON) => dispatch(addUsersToStore(usersJSON)));
  };
};
