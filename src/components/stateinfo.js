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
        <div className="info">Active cases: {numberWithCommas(active)} </div>
        <div className="info">Confirmed cases: {numberWithCommas(confirmed)}</div>
        <div className="info">Deceased: {numberWithCommas(deaths)}</div>
        <div className="info">Recovered cases:{numberWithCommas(recovered)}</div>
        <div className="info">Last updated time: {lastupdatedtime}</div>

    </div>
  </>);
};

export default StateInfo;
