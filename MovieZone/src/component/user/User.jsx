import React from 'react';
import {useParams} from 'react-router-dom';

const User = () => {

    const {userid} = useParams();

    return (
        <>
            <div className='bg-gray-500 min-h-56 rounded-lg flex flex flex-col items-center'>
                <h1 className='text-white bold italic mt-20'>User: {userid}</h1>
            </div>
        </>
    )
}

export default User;