import React from 'react';
import Homepage from './pages/homepage.component'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import Shop from './pages/shop/shop.component'

function App() {

return (
    <div>
        <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path="/shop" component={Shop} />

</Switch>
</div>
) 


}

export default App;
