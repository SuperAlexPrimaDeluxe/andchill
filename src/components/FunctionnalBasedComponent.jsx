import React from "react";

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
    </div>
    )
}

export default FunctionnalBasedComponent;