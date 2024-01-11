import React from "react";
import { ReactDOM } from "react";
import '../App.css'
import { useState } from "react";
const Box = (props) => {
    
    const styles = {
        backgroundColor : props.on? 'grey' : '#fff',
    }
       
    


    return(
        <div className="box" style={styles} onClick={()=>props.toggle(props.id)}>

        </div>
    )
}

export default Box