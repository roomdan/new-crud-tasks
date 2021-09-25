import { useEffect, useState } from "react";
import { Http_post } from "../Components/http.oppers";

const NewTask = ({handleTask})=>{

    const [add, setAdd] = useState(false); const [view,setView] = useState('');
    const [register, setRegister] = useState({fullName:'', task:'', date:''});
    const [importan, setImportan] = useState('Hi, thanks for coming back');
    const [newTask, setNewTask] = useState(0);

    const addTask = ()=>{
        if(!add) {
            setView('0px');
            setAdd(true);
        }
        else{
            setView('-15.5rem')
            setAdd(false);
    }
    }
 window.onkeydown = e=>{
     if(e.key === 'Escape'){
         addTask()
     }
 }

const createTask = ()=>{
    var b= register.fullName === "" || register.task === '' || register.date === ''
    if(b) {
        setImportan('Note: All fields are necesary')
    }
    else {
        setImportan('Note: New task was added');
        handleTask(1);
        setNewTask(newTask+1)
    }
}




useEffect(
    ()=>{
        
        const patch = ()=>{
            class task {
                constructor(student, task){
                    this.student = student;
                    this.task = task;
                    this.isCompleted = false;
                }
            }            
            const addT = new task(register.fullName, register.task);
            Http_post(addT)
        }
        if(newTask!==0){
            patch()
        }

    }, [newTask, register]
)

    return (
        <>
             <div className='add-task' style={{right:view}}>
                <div className='view-btn'>
                    <button className='btn-v' onClick={addTask}></button>
                </div>
                <div className='crud-form'>
                    <div className='form-push'>
                        <div className='title-form'>
                            <h2>ADD NEW TASK</h2>
                        </div>
                        <form className='form-register'>
                                <label className='input-taks'>
                                    <input value={register.fullName} onChange={e=>{setRegister({...register, fullName:e.target.value})}} placeholder='Full name' type='text' className='in-regis'/>
                                </label>
                                <label className='input-taks'>
                                    <input value={register.task} onChange={e=>{setRegister({...register, task:e.target.value})}} type='text' placeholder='Example: "Play Guitar" ' className='in-regis'/>
                                </label>
                                <label className='input-taks'>
                                    <input value={register.date} onChange={e=>{setRegister({...register, date:e.target.value})}} type='date' className='in-regis'/>
                                </label>
                                <label className='input-taks'>
                                <p className='text-white'>{importan}</p>
                                    <button onClick={()=>{createTask()}} type='button' className='in-regis-btn'>Add Task</button>
                                </label>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NewTask