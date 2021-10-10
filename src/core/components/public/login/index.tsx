// General imports
import { useContext, useState } from 'react';

// Module imports
import { Login } from '../../../modules/requests';
import { Context } from '../../../contexts/user';


export default function App() {

    const { dispatch } = useContext(Context);

    const [data, setData] = useState({
        username: "",
        password: ""
    });

    function KeyEvent(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === 'Enter') Validate();
    }

    function Validate() {
        if (!data.username || !data.password) return
        else Submit();
    }

    async function Submit() {
        if (await Login(data.username, data.password)) dispatch();
    }

    return <div>
        
        <input
            type="input"
            placeholder="username"
            value={data.username}
            onChange={(e) => setData({
                ...data, username: e.target.value
            })}
            onKeyDown={KeyEvent}
        />

        <input
            type="password"
            placeholder="password"
            value={data.password}
            onChange={(e) => setData({
                ...data, password: e.target.value
            })}
            onKeyDown={KeyEvent}
        />

        <input 
            value="login"
            type="button"
            onClick={Validate}
        />
    </div>
}