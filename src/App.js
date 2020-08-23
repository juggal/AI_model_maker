import React from "react";
import Scaffold from "./Scaffold/Scaffold";

// importing redux store and attaching it to react app
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Scaffold />
    </Provider>
  );
}
