import React from 'react'

const Navbar = () =>{
    return(
        <>
            <div className='w-screen p-0 m-0 mr-0'>
                <nav className='flex items-center w-full h-12 p-5 bg-orange-700 rounded-xl'>
                    <a className='p-5 mt-5 mb-5 text-white uppercase' href='#'>Home</a>
                    <a className='p-5 mt-5 mb-5 text-white uppercase' href='#'>About</a>
                    <a className='p-5 mt-5 mb-5 text-white uppercase' href='#'>Contact</a>
                </nav>
            </div>
        </>
    )
}

export default Navbar;