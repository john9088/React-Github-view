import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

//React Routers
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

//React toastify
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

//firebase
import firebase from 'firebase/app'
import 'firebase/auth'

//Components
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import PageNotFound from './pages/PageNotFound'
import { UserContext } from './Context/UserContext';
import Footer from './Layout/Footer';
import NavBar from './Layout/Navbar';

//Firebase
import firebaseConfig from  './Config/firebaseConfig'
firebase.initializeApp(firebaseConfig)

const App = () => {
  
  const [user,setUser] = useState(null)

  return (
    <div>
      <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user, setUser}}>
        <NavBar/>
        <Switch>
          <Route exact path="React-Github-view/" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="*" component={PageNotFound} />          
        </Switch>
      </UserContext.Provider>
    </Router>
    
    <Footer/>
    </div> 
    
    
  );
}

export default App;
