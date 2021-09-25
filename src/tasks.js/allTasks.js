import "./Tasks.scss";

export default function Tasks ({children}){

    return (
        <div className='max-w-full'>
   {/* here space reserved for nav filter view */}
            <div className='w-screen'>
                {children}
            </div>
        </div>
    )
}