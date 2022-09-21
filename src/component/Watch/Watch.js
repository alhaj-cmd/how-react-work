import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps]  = useState(0);
    const IncreseSteps  = ()  =>{
        const Increse  = steps+1;
        setSteps(Increse);
    }
    const DecreseSteps  = ()  =>{
        const Decrese  = steps-1;
        setSteps(Decrese);
    }
    useEffect( () =>{
        console.log(steps)
    },[steps]);
    return (
        <div>
            <h2>This is watch time</h2>
            <p>count:{steps}</p>
            <button onClick={IncreseSteps}>Increase</button>
            <button onClick={DecreseSteps}>Increase</button>
            <Display steps={steps}></Display>
        </div>
    );
};

export default Watch;