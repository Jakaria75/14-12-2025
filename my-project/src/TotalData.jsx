import React from 'react';

const TotalData = ({ item }) => {
    console.log(item);
    return (
        <div className='cart'>
            <h3>{item.name.common}</h3>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img src={item.flags.png} alt="" />
        </div>
    );
};

export default TotalData;
