import React from 'react';
import Homepage from './pages/homepage.component'
import './App.css'
import {Route, Switch,Redirect} from 'react-router-dom'
import Shop from './pages/shop/shop.component'
import Header from './components/header/header.component'
import Sign from './pages/sign/sign.component'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/users.action'
class App extends React.Component{    //eslint-disable-next-line




unsubscribeFromAuth=null

componentDidMount(){
    const {setCurrentUser}=this.props
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
        if (userAuth)
        {
            const userRef=await createUserProfileDocument(userAuth)
            userRef.onSnapshot(snapShot=>{
                setCurrentUser({
                  
                        id:snapShot.id,
                        ...snapShot.data()
                    })
            
            })
          
        }
        else
        {
           setCurrentUser(userAuth)
          
        }
    })
    
}

componentWillUnmount(){
    this.unsubscribeFromAuth()
}
render() {
    return (
        <div>
        <Header/>
        <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signIn" render={()=>this.props.currentUser ? (<Redirect to='/' />) :( <Sign />) } />

</Switch>
</div> 
    );
}



}

const mapStatetoProps=({user})=>({
    currentUser:user.currentUser
})

const maptoDispatchtoProps=dispatch=>({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStatetoProps,maptoDispatchtoProps)(App);
