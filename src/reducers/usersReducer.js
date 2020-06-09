export default (state = [], action) => {
  switch (action.type) {
    case "ADD_USERS_TO_STORE":
      return {
        ...state,
        users: action.usersData,
      };
    default:
      return state;
  }
};
