const INITIAL_STATE = {
  loading: false,
  currentUser: null,
  users: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_USERS_TO_STORE":
      return {
        ...state,
        users: action.usersData,
      };
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.user,
      };
    case "REMOVE_CURRENT_USER":
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};
