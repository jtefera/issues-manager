import React from 'react'
import ReactDOM from 'react-dom'

const { Component } = React;
class App extends Component {
    render() {
       return <div> Hola Mundo</div>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);