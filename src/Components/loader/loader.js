import "./styleLoader.css"

const Loader = ()=>{

    return (
        <div className='w-15  flex justify-center items-center h-64 rounded'>
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    )
}

export default Loader