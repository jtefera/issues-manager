import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider, connect} from 'react-redux';
import reducer from './reducer/reducer';
import {fetchIssues, startConnectionCheck} from './actions/';
import AddIssueForm from './containers/addIssueForm';
import IssueEditor from './containers/editIssueForm';
import HeaderBar from './containers/HeaderBar';
import Message from './containers/message';
import LoginForm from './containers/loginForm';
import thunkMiddleware from 'redux-thunk';
import ListIssuesOfPriority from './containers/issuesOfPriority.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
    store.dispatch(startConnectionCheck());    
}

init();

let App = ({
    showAddIssueForm,
    showEditIssueForm,
    showLoginForm,
    showMessage,
}) => {
    const addIssueForm = (showAddIssueForm) ? <AddIssueForm /> : null;
    const editIssueForm = (showEditIssueForm) ? <IssueEditor /> : null;
    const loginForm = (showLoginForm) ? <LoginForm /> : null;
    const message = (showMessage) ? <Message /> : null;
    return (
        <div>
            <HeaderBar />
            {addIssueForm}
            {editIssueForm}
            {loginForm}
            {message}
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
    showMessage: state.messageDisplay.showMessage,
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
