export default function Tailwin () {

    return (
        <>
        <div className="w-full h-screen flex items-center justify-center md:purple bg-white">
        <div className='w-6/12 h-52 bg-ligthPurple' >
          <div className='w-full h-auto flex justify-center text-xl font-bold text-white'>
            <h1>To Do</h1>
          </div>
          <div className='w-full h-32 flex-col jusfity-center'>
            <label className='w-full h-auto flex justify-center'>
              <input className='outline-none p-1 rounded'/>
              <button className='p-1 bg-blue rounded'>Write</button>
            </label>
          </div>
        </div>
    </div>
        </>
    )
}