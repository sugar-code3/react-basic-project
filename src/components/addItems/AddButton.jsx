import React from 'react';
import { BiMessageAdd } from "react-icons/bi";
const AddButton = ({clickItem}) => {
  return (
     <> 
    <div>
    <button type="button" className="btn btn-success kg-btn" onClick={clickItem}>
     <BiMessageAdd className='b1'/>
    </button>
    </div>
    </>
  );
}

export default AddButton;