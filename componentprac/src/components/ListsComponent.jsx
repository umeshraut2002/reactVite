import React, {useId} from 'react';

const ListComponent = () => {

    const data = ['java', 'javaScrip', 'c++'];
    const id = useId();

    return(
        <di>
            {data.map((data) => (
                <ul key={`${id}`}>
                <li>{data}</li>
                </ul>
            ))}
        </di>
    )
}

export default ListComponent;