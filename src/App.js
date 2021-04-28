import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import Invent from './Invent/Invent';
import Admin from './Admin/Admin';
import Orders from './Order/Orders';
import Login from './LogIn/Login';
import Header from './Header/Header';
import CheckOut from './CheckOut/CheckOut';
import { createContext, useState } from 'react';
import PrivateRoute from './PrivateRout/PrivateRoute';


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <Router>
       <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/invent">
            <Invent></Invent>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/productCheckOut/:checkOutId">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/productOrder/:orderId">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/">
          <Home></Home>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider> 
  );
}

export default App;
