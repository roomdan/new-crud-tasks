import { useContext, useState } from "react"
import { Link, Route, useRouteMatch } from "react-router-dom";
import { LogIn } from "../log-in"
import Tasks from "../tasks.js/allTasks";
import { logOut } from "./acctions";
import "./form-CRUD.scss"
import NewTask from "./NewTask";
import ViewTasks from "../Components/getTasks";

const Form = ()=>{

    const [value, setValue] = useContext(LogIn);
    const [unic, setUnic] = useState('')

    const  {url} = useRouteMatch();


    return (
        <div className='h-screen w-screen'>
            <div className=' lg:w-full w-3/5 w-full h-16 items-center bg-dark flex justify-between p-4'>
                    <h1 className='text-4xl	text-white font-extrabold uppercase'> 
                        <Link to='/'>The best tasks</Link></h1>
                    <button onClick={()=>{logOut(value,setValue)}} className='mg-2 bg-white w-20 h-12 rounded'>Log-Out</button>
            </div>
            <NewTask handleTask={(e)=>{setUnic(e)}}/>
            <Tasks>
                <Route path={`${url}`}>
                    <ViewTasks on={unic}/>
                </Route>
            </Tasks>
        </div>
    )
}

export default Form