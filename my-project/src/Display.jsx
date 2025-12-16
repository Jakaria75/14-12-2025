import React, { useState } from 'react';
import TotalData from './TotalData';

const Display = ({ count }) => {
    console.log(count);
    const [handle, setHandle] = useState(count);
    const handleValue = (e) => {
        const searchText = e.target.value.toLowerCase();
        const filteredData = count.filter(item => item.name.common.toLowerCase().includes(searchText));
        setHandle(filteredData);

    }
    const handleClick = () => {
        const resetData = [...count];
        setHandle(resetData);
        console.log(resetData);
    }

    return (
        <>
            <div>
                <input type="search" onInput={handleValue} id="" />
                <button onClick={() => handleClick(count)}>{handle ? "Search" : "Reset"}</button>
            </div>
            <div className={`container`}>
                {handle.map((item) => { return <TotalData item={item} /> })}
            </div>
        </>
    );
};

export default Display;
