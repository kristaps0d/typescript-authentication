// General imports
import { createContext, useEffect, useState } from "react";

// Create context
export const Context = createContext<any>(null);

export function UserProvider(props:any) {

    return (
        <Context.Provider value={{}}>  
            {props.children}
        </Context.Provider>
    );
    
}