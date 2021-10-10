// General imports
import { useEffect } from "react";

// Module imports
import { Logout } from "../../../modules/requests";

export default function App() {

    useEffect(() => {
        Logout();
    })
    
    return <div/>
}
