import React from "react";
import './App.css'

import Routes from "./components/Routes";
import Menu from "./components/template/Menu";


const App = props => (
    // const [state, setState] = useState 

    <div className="App">
        <Menu />
        <Routes />
        
    </div>
)

export default App