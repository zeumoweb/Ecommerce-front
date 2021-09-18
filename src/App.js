import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./components/authentication/SignUp";
import SignIn from "./components/authentication/SignIn";
import Home from "./components/Home/Home";
import NavBar from "./components/Layout/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/signup' exact component= { SignUp } />
          <Route path='/signin' exact component= { SignIn } />
          <Route path='/' exact component= { Home } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
