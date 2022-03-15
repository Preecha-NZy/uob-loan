import ReactDOM from 'react-dom'
import React from "react"

function App (){ 
    return (
        <p>Hello from App component</p>
        )
    }  
const app = document.getElementById('app')
ReactDOM.render(<App />, app)