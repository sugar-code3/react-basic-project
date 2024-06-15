import React from 'react';

const AddButton = ({clickItem}) => {
  return (
     <> 
    <div>
    <button type="button" className="btn btn-success kg-btn" onClick={clickItem}>
      Add
    </button>
    </div>
    </>
  );
}

export default AddButton;