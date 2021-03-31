import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./routes/AppRouter";
import { store } from "./store/store";
import "./style.css";

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};
