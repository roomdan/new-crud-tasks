import { createContext,  useState } from "react"

function LogIns ({children}) {

    const [state, setState] = useState({in:false, change:0, close:false})

    return (
        <LogIn.Provider value={[state, setState]}>
            {children}
        </LogIn.Provider>
    )
}
export default LogIns
export const LogIn = createContext()