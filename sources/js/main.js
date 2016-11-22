import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider, connect} from 'react-redux';
import reducer from './reducer/reducer';
import {addIssue, fetchIssues} from './actions/';
import AddIssueForm from './containers/addIssueForm';
import IssueEditor from './containers/issueEditor';
import HeaderBar from './containers/HeaderBar';
import thunkMiddleware from 'redux-thunk';
import ListIssuesOfPriority from './containers/issuesOfPriority.js';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
/*
    Componentess que tendra
        Formulario
        Login
        Lista de issues por prioridad
        issues
            Comentarios
            Formulario comentario
*/
const {Component} = React;
const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunkMiddleware),
        //  For Chrome Debug
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
const init = () => {
    store.dispatch(fetchIssues());
}

init();

const LoginForm = ({onClick}) => (
    <form>
        Username: <input type='text' name='username' /><br />
        Password: <input type='password' name='password' /> <br />
        <button type='submit' onClick={onClick}>Login</button>
    </form>
);


let App = ({showAddIssueForm, showEditIssueForm, showLoginForm}) => {
    const addIssueForm = (showAddIssueForm) ? <AddIssueForm /> : null;
    const editIssueForm = (showEditIssueForm) ? <IssueEditor /> : null;
    const loginForm = (showLoginForm) ? <LoginForm /> : null;
    return (
        <div>
            <HeaderBar />
            {addIssueForm}
            {editIssueForm}
            {loginForm}
            <ListIssuesOfPriority priority="1"/>
            <ListIssuesOfPriority priority="2"/>
            <ListIssuesOfPriority priority="3"/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    showAddIssueForm: state.formsDisplay.showAddIssueForm,
    showEditIssueForm: state.formsDisplay.showEditIssueForm,
    showLoginForm: state.formsDisplay.showLoginForm,
});

App = connect(mapStateToProps)(App);

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>        
            <App />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
