// sync
const addItemsToStore = (itemsJSON) => ({
  type: "ADD_ITEMS_TO_STORE",
  itemsData: itemsJSON.data,
});

const addItemToStore = (itemJSON) => ({
  type: "ADD_ITEM_TO_STORE",
  item: itemJSON.data,
});

const updateItemInStore = (itemJSON) => ({
  type: "UPDATE_ITEM_IN_STORE",
  item: itemJSON.data,
});

export const selectedItem = (item) => ({
  type: "SELECTED_ITEM",
  item,
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

export const createItem = (formData, user_id) => {
  return (dispatch) => {
    const body = {
      name: formData.item,
      description: formData.description,
      packed: formData.packed,
    };
    return fetch(`http://localhost:3001/api/v1/users/${user_id}/items`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((itemJSON) => {
        if (itemJSON.error) {
          console.log(itemJSON.error);
        } else {
          dispatch(addItemToStore(itemJSON));
        }
      });
  };
};

export const editItem = (formData, user_id) => {
  return (dispatch) => {
    const body = {
      name: formData.item,
      description: formData.description,
      packed: formData.packed,
    };
    return fetch(`http://localhost:3001/api/v1/users/${user_id}/items`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((itemJSON) => {
        if (itemJSON.error) {
          console.log(itemJSON.error);
        } else {
          dispatch(updateItemInStore(itemJSON));
        }
      });
  };
};
