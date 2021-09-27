import { useContext, useEffect, useState } from "react";
import { LogIn } from "../log-in";
import { Http_get } from "./http.oppers";
import TaskStyle from "./TaskStyle"

const ViewTasks = ()=>{

 const [data, setData] = useState('');const [change, setChange ] = useState(0);

 const [value] = useContext(LogIn);

    useEffect(
        ()=>{
            const Get = async ()=>{
                const acc = await Http_get();
                setData(acc.data);
            }
            Get();
            if(change!==0){
                Get()
                setChange(0)
            }
        },[change, value.change]
    )
    const tasks = data?data.todos.map(
        e=>{
            return <TaskStyle change={(t)=>{setChange(change+t)}} complete={String(e.isCompleted)} id={e.id} task={e.task} name={e.student} key={e.id} />
        }
    ):'loading'


    return (
        <div className='w-screen flex justify-center p-2 md:p-10' >
            <section className='rounded-sm	 flex-col md:w-1/2 w-screen justify-center h-auto bg-grey '>
                <div className='w-full flex justify-center items-center text-black h-16 font-bold text-xl'>
                    <span>Unresolved Tasks</span>
                </div>
                <div className='max-w-full p-3 flex-col'>
                     {tasks}
                </div>
            </section>
        </div>
    )
}

export default ViewTasks