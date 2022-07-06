import { Route, Switch } from 'react-router-dom'; // react router

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from './components/Services/Home';
import Predict from './components/Services/Predict';



function App() {
  return (
    <div>
      <Switch>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/services/home">
          <Home/> 
        </Route>
        <Route path="/services/prediction">
          <Predict /> 
        </Route>
        <Route path="/services/recommandation">
          
        </Route>
        
      </Switch>

    </div>
  );
}

export default App;
