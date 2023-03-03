import React, { useState } from "react";

const ElementList = (props) => {

    
  return (
    <li>
      <span onClick={e => console.log(e.target)}>
        <i className="fa fa-trash"></i>
      </span>
      {props.elemento}
    </li>
  );
};

export default ElementList;


// handleClickSpan(e.target.value)