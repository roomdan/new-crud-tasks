import { useContext, useState } from "react"
import { LogIn } from "../log-in"
import { Http_delete } from "./http.oppers"
import "./tasking.scss"

const TaskStyle = ({name, date, task, complete, id, change})=>{ 

const [value, setValue] = useContext(LogIn);
const [an, setAn ] = useState('')

const statusTask = ()=>{
    if(complete) {
        return 'Pending'
    }
    else {
        return 'Completed'
    }
}
    return (
        <div id={an} className='a-t flex-col h-20 p-1 justify-center w-full bg-greenLi mb-3 rounded'>
            <div className='a-t-t'>
                <h3 className='a-t-t-h3'>{name}</h3>
                <p className='a-t-t-p'>{statusTask()}</p>
            </div>
            <div className=' w-full flex items-center'>
                <div className='a-t-b-in'>
                    <input className='a-t-b-in-task' readOnly value={task}/>
                </div>
                <div className='a-t-b-item-btn'>
                    <button className='btn-complete'></button>
                </div>
                <div className='a-t-b-item-btn'>
                    <button className='btn-edit'>Edit</button>
                </div>
                <div className='a-t-b-item-btn'>
                    <button onClick={()=>{change(+1);Http_delete(id);setValue({...value, change:value.change+1}); setAn('animation-delete')}} className='btn-delete'></button>
                </div>
            </div>
        </div>
    )
}

export default TaskStyle