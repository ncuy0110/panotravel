import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {BrowserRouter, useNavigate} from "react-router-dom";
import App from "./App";
import store from "@/app/store";
import "./index.css";

const NavigateSetter = () => {
    History.navigate = useNavigate();

    return null;
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <NavigateSetter/>
            <App/>
        </BrowserRouter>
    </Provider>
);
