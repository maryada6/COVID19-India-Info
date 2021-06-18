import React from "react";
import {numberWithCommas} from "../covid"

const Dailyinfo= (props) => {
  return(<>
    <div className="daily-info-container" >
      <div className="daily-info">Daily Confirmed: { numberWithCommas(props.obj.dailyconfirmed) || "N/A"}</div>
      <div className="daily-info">Daily Deceased: {numberWithCommas(props.obj.dailydeceased) || "N/A"}</div>
      <div className="daily-info">Daily Recovered: {numberWithCommas(props.obj.dailyrecovered) || "N/A"}</div>
      <div className="daily-info">Date: { numberWithCommas( props.obj.date) || "N/A"}</div>
     
    </div>
  </>);
};

export default Dailyinfo;
