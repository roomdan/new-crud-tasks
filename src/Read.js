import { useContext } from "react"
import { Redirect } from "react-router";
import {LogIn} from "./log-in";
import CrudForm  from "./CRUD/form"

const ReadProperty = ()=>{
    const [state] = useContext(LogIn);
    return (
          state.in?<CrudForm/>:<Redirect to='/'/>
    )
}
export default ReadProperty