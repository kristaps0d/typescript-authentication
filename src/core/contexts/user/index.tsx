// General imports
import { createContext, useEffect, useState } from "react";

// Module imports
import { Validate } from "../../modules/requests";

// Create context
export const Context = createContext<any>(null);

export function UserProvider(props:any) {

    type ContextType = {
        status: boolean | undefined,
        user: string | undefined
    }

    const [state, setState] = useState<ContextType>({
        status: undefined,
        user: undefined
    })

    async function updateStatus() {
        const data = await Validate();

        setState({
            status: data.status,
            user: data.user
        });
    }

    useEffect(() => {
        updateStatus();
    }, [])

    return (
        <Context.Provider value={
            {
                status: state.status,
                username: state.user,
                dispatch: updateStatus
            }
        }>  
            {props.children}
        </Context.Provider>
    );
    
}