import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

function renderWithHotReload(Router) {
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </AppContainer>,
        document.getElementById("app")
    );
}
renderWithHotReload(Router);

if (module.hot) {
    module.hot.accept("./router/index.js", () => {
        const Router = require("./router/index");
        renderWithHotReload(Router);
    })
}