import { useContext } from "react"
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { LogIn } from "./log-in"

const LogInPage = ()=>{

    const [value, setValue] = useContext(LogIn);
    const history = useHistory();

    const t = ()=>{
        if(value){
            setValue({in:true, change:0}); history.push("/home")
        }
        else {
            history.push('/')
        }
    }

 return (
        <div className='w-5/3 h-screen bg-blue flex justify-center items-center md:w-full md:bg-black'>
            <button className='h-16 w-24 bg-white rounded font-semibold' onClick={t}>Log-In</button>
            <Link className='text-white m-3' to='/home'>Already logged in?</Link>
        </div>
    )
}

export default LogInPage

