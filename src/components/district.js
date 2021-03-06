import React from "react";
import {numberWithCommas} from "../covid"

function getRandomColor() {
  var letters = 'BCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

const DistrictInfo = (obj) => {
   
  return(  <div className="container1 district-container">
  { Object.keys(obj.obj).map((item, i) => {
    const color=getRandomColor();
    return(<div className="district-info"  style={{backgroundColor:color}} key={i}>
        <div className="district-name ">{item}</div>
        <div className="info district-name">Active cases: {numberWithCommas(obj.obj[item].active) || 'N/A'} </div>
        <div className="info">Confirmed cases: {numberWithCommas(obj.obj[item].confirmed) || 'N/A'}</div>
        <div className="info">Deceased: {numberWithCommas(obj.obj[item].deceased) || 'N/A'}</div>
        <div className="info">Recovered cases: {numberWithCommas(obj.obj[item].recovered) || 'N/A'}</div>
      </div>)})}
   
      </div>);
};

export default DistrictInfo;
