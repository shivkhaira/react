import React from 'react';
import Homepage from './pages/homepage.component'
import './App.css'
import {Route, Switch} from 'react-router-dom'
function App() {

return (
    <div>
        <Switch>
<Route path='/' component={Homepage} />
</Switch>
</div>
) 


}

export default App;
