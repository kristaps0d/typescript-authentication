// General imports
import { Switch, Route, Redirect,  } from 'react-router-dom';

// Route imports
import { Login, Reset } from '../../../components/public';

// Routes reserved only for non-authenticated users

export default function routes() {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/reset" component={Reset} />
            <Redirect to="/" />
        </Switch>
    );
}