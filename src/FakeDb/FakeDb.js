// added new data in local storage
const addDb = (key) => {
  const exists = getDb();
  let setItems = {};
  if (!exists) {
    setItems[key] = 1;
  } else {
    setItems = JSON.parse(exists);
    if (setItems[key]) {
      let newItems = setItems[key] + 1;
      setItems[key] = newItems;
    } else {
      setItems[key] = 1;
    }
  }
  updateDb(setItems);
};

// get store data in local storage
const getSaveData = () => {
  let exists = getDb();
  return exists ? JSON.parse(getDb()) : {};
};

// get data in local storage
const getDb = () => localStorage.getItem("items");
// update data in local storage
const updateDb = (setItems) =>
  localStorage.setItem("items", JSON.stringify(setItems));

export { addDb, getSaveData };
