// sync
const addUsersToStore = (usersJSON) => ({
  type: "ADD_USERS_TO_STORE",
  usersData: usersJSON.data,
});

// async
export const createUser = (user) => {
  return (dispatch) => {
    const body = {
      user,
    };
    return fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then(console.log);
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/users")
      .then((response) => response.json())
      .then((usersJSON) => dispatch(addUsersToStore(usersJSON)));
  };
};
