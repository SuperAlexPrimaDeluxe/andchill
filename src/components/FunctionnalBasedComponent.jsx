import React from "react";
import PropExample from "../PropExample";

const Child = () => {
  return (
    <p>Enfant appelé dans la fonction</p>
  )
}

function FunctionnalBasedComponent(){
  return(
    <div>
    <Child />
    Componsant basé sur une fonction
    <PropExample flag={false} data = "Youpi j'ai passé une prop data"/>
    </div>
    )
}

export default FunctionnalBasedComponent;