import React from 'react';

const TotalData = ({ item, mark ,handleShow }) => {
    return (
        <div className='cart'>
            <h3>{item.name.common}</h3>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img src={item.flags.png} alt="" />
            <button onClick={() => mark(item.name.common)}>click</button>
            <button onClick={() => handleShow()}>list</button>
            
        </div>
    );
};

export default TotalData;
