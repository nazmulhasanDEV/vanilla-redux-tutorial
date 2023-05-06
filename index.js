const { createStore } = require("redux");

// action types
const INCREMENT = "INCREMENT";

// state
const innitialCounterState = {
  count: 0,
};

const initialUserState = {
  users: [
    {
      name: "Anisul islam",
    },
  ],
};

const incrementAction = (value) => {
  return {
    type: "INCREMENT",
    payload: value,
  };
};

const counterReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementAction({ name: "Kamrul Hasan" }));
