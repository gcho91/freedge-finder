import React from "react";
import ReactDOM from 'react-dom'
import Fridge from "./Fridge"


const App = () => {
    return (
        <div>
            <h1>Freedge Finder</h1>
            <Fridge name="Funky Town" address="Dallas TX" contactPerson="Ria Cho"></Fridge>
            <Fridge name="Maria's Bodega" address="Dallas TX" contactPerson="Jon Snow"></Fridge>
            <Fridge name="Test Location Fridge" address="Richardson TX" contactPerson="Marshall Mathers"></Fridge>

        </div>
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))