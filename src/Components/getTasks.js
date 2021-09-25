import { useEffect, useState } from "react";
import { Http_get } from "./http.oppers";
import TaskStyle from "./TaskStyle"

const ViewTasks = ({value})=>{

 const [data, setData] = useState('')

    console.log(value);

    useEffect(
        ()=>{
            const Get = async ()=>{
                const acc = await Http_get();
                setData(acc.data);
                console.log(acc.data);
            }
            Get()
        },[]
    )

    const tasks = data?data.todos.map(
        e=>{
            return <TaskStyle complete={e.isCompleted} task={e.task} name={e.student} key={e.id} />
        }
    ):''


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