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

const StateInfo = (props) => {
    const {state,statecode,active,confirmed,deaths,recovered,lastupdatedtime,index}=props;
  return(<>
    <div className="state-info" style={{backgroundColor:getRandomColor()}}  key={index}>
        <div className="state-name">{state +"("+ statecode+")" }</div>
        <div className="info state-name">Active cases: {numberWithCommas(active) || 'N/A'} </div>
        <div className="info">Confirmed cases: {numberWithCommas(confirmed) || 'N/A'}</div>
        <div className="info">Deceased: {numberWithCommas(deaths) || 'N/A'}</div>
        <div className="info">Recovered cases: {numberWithCommas(recovered)|| 'N/A'}</div>
        <div className="info">Last updated time: {lastupdatedtime || 'N/A'}</div>

    </div>
  </>);
};

export default StateInfo;
