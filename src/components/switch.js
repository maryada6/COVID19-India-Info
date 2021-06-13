import React from "react"

const Switch=(props)=>{
    return <div className="switch" onClick={()=>props.themeToggler()}>
         <img src={window.location.origin + '/mode.png'} style={{width:'20px',backgroundColor:'#2c498d'}} alt="" />
    </div>
}

export default Switch;