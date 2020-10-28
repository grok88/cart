import React from 'react';
import './App.css';
import {Main} from "./main/Main";
import {Provider} from "react-redux";
import {store} from '../m2-bll/store';
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
