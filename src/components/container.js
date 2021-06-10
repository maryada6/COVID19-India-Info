import React from "react";

const Container= (props) => {
    const {mssg1,num1,mssg2,num2,mssg3}=props
  return(<>
   <div className="c-block">
             <div className="c-view">
               <div className="c-title">{mssg1} <br/> Status</div>
               <div className="yday-vcount"><strong>{num1||'N/A'}</strong> <span>{mssg2}</span></div>
               <div className="total-vcount"><strong>{num2||'N/A'}</strong> <span>{mssg3}</span></div>
             </div>
            </div>
  </>);
};

export default Container;
