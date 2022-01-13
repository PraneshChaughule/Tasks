import React,{useContext} from 'react'
import Notecontext from '../context/Notecontext'

function Info() {
    const context = useContext(Notecontext);
    return (
        <div>
            <center>
            <p>{context.name} </p>
            <p>{context.email}</p>
            <p>{context.gender}</p>
            <p>{context.qualification}</p></center>
        </div>
    )
}

export default Info
