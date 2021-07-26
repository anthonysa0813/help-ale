import React from "react";

const SessionGlobal = (props) => {
  // props
  console.log(props.logo);
  return (
    <div className={`containerButton ${props.style}`}>
      <button type="button">Iniciar Sesión</button>
      <img src={props.logo} height="30" alt={props.style}></img>
    </div>
  );
};

export default SessionGlobal;
