import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/reducer';
import {addIssue} from './actions/';

import ListIssuesOfPriority from './containers/issuesOfPriority.js';
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
const store = createStore(reducer);

const init = () => {
    const mockIssues = [
        {
            text: 'Subir predicas',
            priority: 1,
            id: 0,
        },
        {
            text: 'Quitar errores',
            priority: 2,
            id: 1,
        },
        {
            text: 'Responder mensajes',
            priority: 3,
            id: 2,
        },
        {
            text: 'Contactar con proveedores',
            priority: 1,
            id: 3,
        },
        {
            text: 'Extender suscripción',
            priority: 2,
            id: 4,
        },  
    ];
    mockIssues.forEach((issue) => {
        store.dispatch(addIssue(issue.text, issue.priority))
    });
    console.log(store.getState());
}

init();

const LoginForm = ({onClick}) => (
    <form>
        Username: <input type='text' name='username' /><br />
        Password: <input type='password' name='password' /> <br />
        <button type='submit' onClick={onClick}>Login</button>
    </form>
);

class AddIssueForm extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <form>
                Title: <input type='text' name='text' /><br />
                Priority: <input type='password' name='password' /> <br />
                <button type='submit'>Add Issue</button>
            </form>
        )
    }
}

class App extends Component {
    constructor() {
        super();
    }
    render() {
       return (
           <div>
                <AddIssueForm />
                <ListIssuesOfPriority priority="1"/>
                <ListIssuesOfPriority priority="2"/>
                <ListIssuesOfPriority priority="3"/>
           </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
