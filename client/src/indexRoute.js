import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import App from "./SignUp/SignUp"
import App2 from "./SignIn/SignIn"
import App3 from "./MainPage"

export default function IndexRoute() {

    return (
        <Router>
            <Switch>
                <Route exact path="/"><App/></Route>
                <Route path="/signin"><App2/></Route>
                <Route path="/mainpage"><App3/> </Route>
            </Switch>
        </Router> 
    );
}
