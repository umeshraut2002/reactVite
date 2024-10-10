import {useState} from 'react'

const Main = () =>{
    return (
        <>
            <div className='flex flex-col items-center w-full h-full m-10 mx-12 my-12 bg-black'>
                <div>
                    <h1 className='italic font-bold text-orange-700 uppercase'>Guess The Number [1 to 100]</h1>
                </div>

                <div className='flex items-center m-14' >
                    <input type='number' placeholder='Enter Number Here' className='p-2 uppercase w-60 h-14 m-15' />
                    <button className='m-5 uppercase border-white'>Check</button>
                </div>

                <div>
                    <button className='m-5 uppercase '>Exit</button>
                    <button className='m-5 uppercase '>PLay Again</button>
                </div>
                
                <div>
                     <h1 className='m-10 font-bold text-orange-700 uppercase'>Computer Score: </h1>    
                     <h1 className='m-10 font-bold text-orange-700 uppercase'>Your Score: </h1>
                     <h1 className='m-10 font-bold text-orange-700 uppercase'>Result: </h1>
                </div>                
            </div>
        </>
    )
}

export default Main;