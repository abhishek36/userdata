const UserReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        users: action.payload,
      };

    case "GET_USER":
      return {
        ...state,
        singleuser: action.payload,
      };
  }
};

export default UserReducer;
