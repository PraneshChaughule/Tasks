import React, { useState } from 'react'
import Data from './Data';

export default function About() {
    const[conditon, setCondition] = useState(false);
    const[classes, setClasses] = useState(["btn btn-success"]);
    const[name, setName] = useState("Show");
    const handleData=()=>{
        if(conditon === true){
            setClasses("btn btn-success");
            setName("Show")
            setCondition(false);
        }else{
            setClasses("btn btn-danger");
            setName("Hide")
            setCondition(true);
        }
    }
    return (
        <div>
            <p>Click The Button</p>
            <button className={classes} style={{marginLeft:'5%'}} onClick={handleData}>{name}</button>
            {conditon ? <Data/> : ""}
        </div>
    )
}

