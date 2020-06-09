// sync
const addUsersToStore = (usersJSON) => ({
  type: "ADD_USERS_TO_STORE",
  usersData: usersJSON.data,
});

const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  user,
});

const removeCurrentUser = () => ({
  type: "REMOVE_CURRENT_USER",
});

// async
export const createUser = (user) => {
  return (dispatch) => {
    const body = {
      user,
    };
    return fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((userJSON) => {
        if (userJSON.error) {
          console.log(userJSON.error);
        } else {
          dispatch(setCurrentUser(userJSON));
        }
      });
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/users", {
      method: "GET",
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((usersJSON) => dispatch(addUsersToStore(usersJSON)));
  };
};

export const getCurrentUser = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/sessions/get_current_user", {
      method: "GET",
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((user) => dispatch(setCurrentUser(user)));
  };
};

export const logoutCurrentUser = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/sessions/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        if (responseJSON.error) {
          console.log(responseJSON.error);
        } else {
          dispatch(removeCurrentUser());
        }
      });
  };
};
