import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/reducer';
import {initApp} from './actions/';
import thunkMiddleware from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './containers/app';

injectTapEventPlugin();

let store;
try{
    // Debugging in desktop chrome
    store = createStore(
        reducer,
        compose(
            applyMiddleware(thunkMiddleware),
            // For Debugging
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
} catch(e) {
    // Works in Mobile
    store = createStore(
        reducer,
        applyMiddleware(thunkMiddleware)
    );
}

//Init App
store.dispatch(initApp());

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>       
            <App />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
