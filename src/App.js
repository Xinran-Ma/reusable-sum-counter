import React from "react";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";

import "./styles/counter.scss";
import "./styles/App.scss";
import "./styles/root.scss";
import "./styles/total.scss";

import Counter from "./components/Counter";
import Total from "./components/Total";
import { plus, reduce } from "./components/ActionTypes";

const initialState = {
  counter: {}
};

let store = createStore(counterReducer, initialState);
store.subscribe(() => console.log(store.getState()));

function counterReducer(state = initialState, action) {
  if (!([action.flag] in state.counter)) {
    state.counter[action.flag] = 0;
  }
  switch (action.type) {
    case plus:
      return {
        ...state,
        counter: {
          ...state.counter,
          [action.flag]: state.counter[action.flag] + 1
        }
      };
    case reduce:
      return {
        ...state,
        counter: {
          ...state.counter,
          [action.flag]: state.counter[action.flag] - 1
        }
      };
    default:
      return state;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    plusOne: flag => dispatch({ type: plus, flag: flag }),
    reduceOne: flag => dispatch({ type: reduce, flag: flag })
  };
};

const ConnectedCounterA = connect(
  state => state,
  mapDispatchToProps
)(Counter);

const ConnectedTotal = connect(state => state)(Total);

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ConnectedCounterA flag={"A"} />
        <ConnectedCounterA flag={"B"} />
        <ConnectedTotal />
      </div>
    </Provider>
  );
}
