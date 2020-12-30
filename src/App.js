import { FiberPin, FormatBoldRounded } from '@material-ui/icons';
import './App.css';
import { useEffect } from "react";
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"; 
import Checkout from './Checkout';
import Login from './Login'
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';

function App() {

    const [{},dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("User is ", authUser);

      if(authUser){
        // the user just logges in / user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        // the user is logged out
          dispatch({
            type:'SET_USER',
            user: null
          })
      }
    })
  },[])

  return (
    <Router>
      <div className="App">
      <Header/>

        <Switch>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Home/>
          </Route> 
        </Switch>
  
      </div>
    </Router>
  );
}

export default App;
