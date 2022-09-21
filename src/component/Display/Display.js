import React from 'react';

const Display = (props) =>{
    return (
        <div style={{color:'red'}}>
            <h2>Hello display:{props.steps}</h2>
        </div>
    )
}

export default Display;