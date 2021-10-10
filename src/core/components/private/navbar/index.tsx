// General imports
import { Link } from "react-router-dom";

export default function App() {
    return <div>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/logout">Logout</Link>
    </div>
}