import React from 'react';
import './App.css';
import {Main} from "./main/Main";
import {Provider} from "react-redux";
import { store } from '../m2-bll/store';

function App() {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
}

export default App;
