import React from 'react'
import './style.css'


const Box = (props) =>{
    return(
    <div className='color-box'>
        <h1>Choose the color</h1>
        <input onChange={props.onChange} type="color"/>
        <p>{props.currentColor}</p>
    </div>
    )
}


export default Box;
