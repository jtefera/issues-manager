import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/reducer';
import {addIssue} from './actions/';
import AddIssueForm from './containers/addIssueForm';

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
const store = createStore(
    reducer,
    //For Chrome Debug
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const init = () => {
    const loremIpsum = `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been the industry\'s 
    standard dummy text ever since the 1500s, when an unknown printer 
    took a galley of type and scrambled it to make a type specimen book.`;
    const randomDate = () => Date(2016, 11, Math.floor(Math.random() * 30));
    const mockIssues = [
        {
            title: 'Subir predicas',
            description: loremIpsum,
            author: 'Jonathan Endale',
            email: 'media@icmadrid.com',
            date: randomDate(),
            priority: 1,
            id: 0,
        },
        {
            title: 'Quitar errores',
            description: loremIpsum,
            author: 'Jonathan Endale',
            email: 'media@icmadrid.com',
            date: randomDate(),
            priority: 2,
            id: 1,
        },
        {
            title: 'Responder mensajes',
            description: loremIpsum,
            author: 'Jonathan Endale',
            email: 'media@icmadrid.com',
            date: randomDate(),
            priority: 3,
            id: 2,
        },
        {
            title: 'Contactar con proveedores',
            description: loremIpsum,
            author: 'Jonathan Endale',
            email: 'media@icmadrid.com',
            date: randomDate(),
            priority: 1,
            id: 3,
        },
        {
            title: 'Extender suscripción',
            description: loremIpsum,
            author: 'Jonathan Endale',
            email: 'media@icmadrid.com',
            date: randomDate(),
            priority: 2,
            id: 4,
        },  
    ];
    mockIssues.forEach((issue) => {
        store.dispatch(addIssue(issue));
    });
}

init();

const LoginForm = ({onClick}) => (
    <form>
        Username: <input type='text' name='username' /><br />
        Password: <input type='password' name='password' /> <br />
        <button type='submit' onClick={onClick}>Login</button>
    </form>
);


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
