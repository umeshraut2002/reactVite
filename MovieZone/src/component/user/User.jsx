import React from 'react';
import {useParams} from 'react-router-dom';

const User = () => {

    const {userid} = useParams();

    return (
        <>
            <div className='bg-gray-500 min-h-56 rounded-lg'>
                <h1>User: {userid}</h1>
            </div>
        </>
    )
}

export default User;