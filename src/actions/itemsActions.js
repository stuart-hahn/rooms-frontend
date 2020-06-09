// sync
const addItemsToStore = (itemsJSON) => ({
  type: "ADD_ITEMS_TO_STORE",
  itemsData: itemsJSON.data,
});

// async
export const fetchUserItems = (user_id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/api/v1/users/${user_id}/items`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((itemsJSON) => {
        if (itemsJSON.error) {
          console.log(itemsJSON.error);
        } else {
          dispatch(addItemsToStore(itemsJSON));
        }
      });
  };
};
