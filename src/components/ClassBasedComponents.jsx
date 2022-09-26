// On commence par les imports essentiels
import React, { Component } from 'react';


// class le nom du composant comme keyword et il étend le composant de React 
class ClassBasedComponents extends Component{
  render(){
    return(
      <div>Example de composant basé sur la classe</div>
    )
  }
};

//J'exporte mon composant pour le rendre utilisable partout dans tous le projet
export default ClassBasedComponents;