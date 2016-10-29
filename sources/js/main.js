import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/reducer';
/*

    Componentess que tendra
        Formulario
        Login
        Lista de tasks por prioridad
        tasks
            Comentarios
            Formulario comentario
*/
const {Component} = React;
const store = createStore(reducer);
class LoginForm extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <form>
                Username: <input type='text' name='username' /><br />
                Password: <input type='password' name='password' /> <br />
                <button type='submit'>Login</button>
            </form>
        );
    }
}

class AddTaskForm extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <form>
                Title: <input type='text' name='title' /><br />
                Priority: <input type='password' name='password' /> <br />
                <button type='submit'>Add Task</button>
            </form>
        )
    }
}

function Task(props) {
    return (
        <li>
            <div>
                Task Title: {props.title}<br />
            </div>
        </li>
    );
}

class ListTasks extends Component {
    constructor() {
        super();
    }
    render() {
        const tasksEl = this.props.tasks.map(
            (title, id) => <Task key={id} title={title}/>
        );
        return (
            <div>
                {this.props.priority} Priority Tasks: <br />
                <ul>
                    {tasksEl}
                </ul>
            </div>
        );
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
             tasks: [
                {
                    title: 'Subir predicas',
                    priority: 1
                },
                {
                    title: 'Quitar errores',
                    priority: 2
                },
                {
                    title: 'Responder mensajes',
                    priority: 3
                },
                {
                    title: 'Contactar con proveedores',
                    priority: 1
                },
                {
                    title: 'Extender suscripción',
                    priority: 2
                }
            ],
        }
    }
    render() {
       const tasks = this.state.tasks.slice();
       let taskByPriority = tasks.reduce((prev, cv) => {
           if(prev[cv.priority] === undefined) {
               prev[cv.priority] = [];
           }
           prev[cv.priority].push(cv.title);
           console.log(prev);
           return prev;
        }, {});
       return (
           <div>
                <AddTaskForm />
                <ListTasks tasks={taskByPriority[1]} priority="High"/>
                <ListTasks tasks={taskByPriority[3]} priority="Medium"/>
                <ListTasks tasks={taskByPriority[2]} priority="Low"/>
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
