import React, { useState } from "react";

const ElementList = (props) => {

  return (
    <li>
      <span onClick={(e) => props.handleClickSpan(props.elemento)}>
        <i className="fa fa-trash"></i>
      </span>
      {props.elemento}
    </li>
  );
};

export default ElementList;