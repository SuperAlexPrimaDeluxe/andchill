import React from "react";
import PropExample from "../PropExample";

const Child = () => {
  return (
    <p>Enfant appelé dans la fonction</p>
  )
}

function FunctionnalBasedComponent(){

  // Passer une fonction dans une prop via une Méthode, c'est ici !

  const parentComponentHandler = ()=>{
    console.log("HelloFromtheparentCompolol");
  }


  return(
    <div>
    <Child />
    Componsant basé sur une fonction
    <PropExample parentComponentHandler={parentComponentHandler} flag={false} data = "Youpi j'ai passé une prop data"/>
    </div>
    )
}

export default FunctionnalBasedComponent;