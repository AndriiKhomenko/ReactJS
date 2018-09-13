import React from "react";
import { BrowserRouter ,Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/shared-ui/app/app";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
