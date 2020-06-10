const INITIAL_STATE = {
  loading: false,
  items: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_STORE":
      return {
        ...state,
        items: [...state.items, action.item],
      };
    case "ADD_ITEMS_TO_STORE":
      return {
        ...state,
        items: action.itemsData,
      };
    default:
      return state;
  }
};
