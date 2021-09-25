import EditValue from "./context";
import  LogIn  from "./log-in";
import ReadProperty from "./Read";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {

  return (
    <LogIn>
      <Router>
        <Switch>
          <Route exact path='/'>
           <EditValue/>
          </Route>
          <Route path='/home'>
            <ReadProperty/>
          </Route>
        </Switch>
      </Router>
    </LogIn>
  )
}

export default App;
