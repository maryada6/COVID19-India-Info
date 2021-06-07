import React from 'react';

const Dropdown = React.forwardRef((obj,ref) =>( 
        <div className="district-select">
        <label htmlFor="district">Select a district:</label>
        <select  name="district" id="selectDistrictID" ref={ref}> 
    { Object.keys(obj.obj).map((item, i) => (
         <option value={item} key={i}>
        {item}
       </option>
        ))}

        </select>
        </div>
     ));
export default Dropdown;