import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/Layout/NavBar";
import User from "./components/authentication/User";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' exact component= { Home } />
          <Route path = '/user' exact component= {User} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
