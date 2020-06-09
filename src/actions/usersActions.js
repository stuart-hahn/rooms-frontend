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
      credentials: "include",
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
      .then(console.log);
  };
};

export const logout = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((response) => response.json())
      .then(console.log);
  };
};
