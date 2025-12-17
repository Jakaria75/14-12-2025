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

    const [use, setuse] = useState([]);
    const mark = (flag) => {
        const newMart = [...use, flag]
        setuse(newMart);
    }

    const [show, setShow] = useState([]);
    const handleShow = (name) => {
        const newShow = [...show, name]
        setShow(newShow);
    }

    return (
        <>
            <div>
                <input type="search" onInput={handleValue} id="" />
                <button onClick={() => handleClick(count)}>{handle ? "Search" : "Reset"}</button>
            </div>
            <div>
                {use.map((flag) => { return <h2 key={flag}>{flag}</h2> })}
            </div>
            <ol>
                {show.map((flag) => { return <li key={flag}>{flag}</li> })}
            </ol>
            <div className={`container`}>
                {handle.map((item) => { return <TotalData item={item} mark={mark} handleShow={handleShow} /> })}
            </div>
        </>
    );
};

export default Display;
