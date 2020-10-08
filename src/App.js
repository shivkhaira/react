import React from 'react';
import Homepage from './pages/homepage.component'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import Shop from './pages/shop/shop.component'
import Header from './components/header/header.component'
import Sign from './pages/sign/sign.component'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component{    //eslint-disable-next-line

constructor() { 
    super();
 

this.state={
    currentUser:null
}

}


unsubscribeFromAuth=null

componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
        if (userAuth)
        {
            const userRef=await createUserProfileDocument(userAuth)
            userRef.onSnapshot(snapShot=>{
                this.setState({
                    currentUser:{
                        id:snapShot.id,
                        ...snapShot.data()
                    }
                })
            })
          
        }
        else
        {
           this.setState({
               currentUser:userAuth
           })
          
        }
    })
    
}

componentWillUnmount(){
    this.unsubscribeFromAuth()
}
render() {
    return (
        <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signIn" component={Sign} />

</Switch>
</div> 
    );
}



}

export default App;
