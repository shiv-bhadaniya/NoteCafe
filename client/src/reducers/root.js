const root = (init = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      // console.log("Inside reducer");
      return [...init, action.payload];
    case "CREATE":
      console.log("Inside CREATE reducer");
      return [...init, action.payload];
    case "UPDATE":
      console.log("Inside UPDATE reducer");
      return init.map((initOne) =>
        initOne._id === action.payload._id ? action.payload : initOne
      );
    default:
      return init;
  }
};

export default root;
