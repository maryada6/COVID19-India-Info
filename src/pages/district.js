import React, { useState, useEffect ,useRef} from "react";
import { dataReturnDistrictOfState } from "../covid";
import Loading from "../loading"
import DistrictInfo from "../components/district"
import Dropdown from "../components/dropdown"

const District = () => {

const state = useRef(null);
const district = useRef(null);
const [objStates,setObjStates]=useState([])
const [objDistricts,setObjDistricts]=useState([])
const [loading,setLoading]=useState(false)
 


const handleSubmit = event => {
    event.preventDefault();
    if (state || district) {
      fetchdata();
    } 
    
  };

  const handleDistrict = async () => {
    try {
      // console.log(district.current.value);
      setLoading(true)
        dataReturnDistrictOfState(state.current.value,"").then(function (result) {
            if (result !== {}) {
                setObjDistricts(result);
                setObjStates(result);
                setLoading(false);
              }
      });
      
}

  catch (error) {
    setLoading(false);
    console.log(error);
  }

  }

  const fetchdata = async () => {
    try {
      // console.log(district.current.value);
      setLoading(true)
      if(district.current===null)
        dataReturnDistrictOfState(state.current.value,"").then(function (result) {
            if (result !== {}) {
                setObjStates(result);
                setLoading(false);
              }
      });
      else
      dataReturnDistrictOfState(state.current.value,district.current.value).then(function (result) {
        if (result !== {}) {
            setObjStates(result);
            setLoading(false);
          }
  });
      
    } 
    
    catch (error) {
      setLoading(false);
      console.log(error);
    }
  };


 

useEffect(()=>{
    fetchdata();
    handleDistrict();
},[])


  return (
    <div className="page">
    <form onSubmit={handleSubmit}>
      <div className="info-get">
      <label htmlFor="state">Select a State:</label>

      <select name="state" id="selectElementID" defaultValue={'Tamil Nadu'} onChange={()=>handleDistrict()} ref={state}>
        <option value="Andaman and Nicobar Islands">
          Andaman and Nicobar Islands
        </option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Dadra and Nagar Haveli and Daman and Diu">
          Dadra and Nagar Haveli and Daman and Diu
        </option>
        <option value="Delhi">Delhi</option>
        <option value="Goa">Goa</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Ladakh">Ladakh</option>
        <option value="Lakshadweep">Lakshadweep</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Puducherry">Puducherry</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Tamil Nadu" >Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Tripura">Tripura</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="West Bengal">West Bengal</option>
      </select>
      <Dropdown obj={objDistricts} ref={district} />
      {/* <label htmlFor="district">Enter district:</label>
      <input id="district" type="text" ref={district}/> */}
      <button type="submit" >Submit</button>
      </div>
      </form>
      {loading?<Loading/>:<DistrictInfo obj={objStates}/>} 
    </div>
  );
};



export default District;
