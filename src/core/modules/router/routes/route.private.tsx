// General imports
import { Switch, Route, Redirect } from 'react-router-dom';

// Route imports
import { Navbar, Logout, Home, User  } from '../../../components/private';

// Routes reserved only for authenticated users

export default function routes() {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/logout" component={Logout} />

                <Route exact path="/" component={Home} />
                <Route exact path="/user" component={User} />
                
                <Redirect to="/" />
            </Switch>
        </>   
    );
}