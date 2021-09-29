import { useState } from "react"
import { Http_delete} from "./http.oppers"
import "./tasking.scss"

const TaskStyle = ({name, ok, task, id, change})=>{ 


const [an, setAn ] = useState(''); const [d, setD] = useState('flex');
const [complete, setComplete] = useState(''); const [state, setState] = useState('Pending')

const statusTask = ()=>{
    if(!complete) {
        setState('Completed')
        setComplete('on')
    }
    else {
        setState('Pending');
        setComplete('')
    }
}

const dnone = ()=>{
    setAn('animation-delete');
    setTimeout(
        ()=>{
            setD('flex')
        },1000
    )
}



    return (
        <div style={{
            display:d
        }} id={an} className='a-t flex-col h-20 p-1 justify-center w-full bg-greenLi mb-3 rounded'>
            <div className='a-t-t'>
                <h3 className='a-t-t-h3'>{name}</h3>
                <p className='a-t-t-p'>{state}</p>
            </div>
            <div className=' w-full flex items-center'>
                <div className='a-t-b-in'>
                    <input className='a-t-b-in-task' readOnly value={task}/>
                </div>
                <div className='a-t-b-item-btn'>
                    <button className='btn-complete' onClick={statusTask}></button>
                </div>
                {/* <div className='a-t-b-item-btn'>
                    <button className='btn-edit' >Edit</button>
                </div> */}
                <div className='a-t-b-item-btn'>
                    <button onClick={()=>{change(+1);Http_delete(id); dnone()}} className='btn-delete'></button>
                </div>
            </div>
        </div>
    )
}

export default TaskStyle