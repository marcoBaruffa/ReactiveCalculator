import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import CalculatorContainer from "./containers/CalculatorContainer";
import CalculatorReducer from "./reducers/CalculatorReducer";

export default class App{
    constructor(){
        const store = createStore(CalculatorReducer);
        const cont = document.getElementById("app");

        ReactDOM.render(
            <Provider store={store}>
                <CalculatorContainer />
            </Provider>, cont);
    }
}

let app = new App();
