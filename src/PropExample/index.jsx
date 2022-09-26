import React from "react";

// Une prop va être élement que je vais pouvroir réutiliser dans d'autres partie de mon projet.

// LA SYNTAXE PATENTHESE TOUT COLLE DE ***** IMPORTE SINON L'EXPORT DE LA PROPS DANS UN COMPOSANT FOIRE

const PropExample = (props)=>{
  console.log(props);
  // LES PARAM DE LA PROPS SONT APPELE DANS LA BALISE DAPPEL QUI EST DANS LE COMPOSANT ON PEUT Y PASSER N'IMPORTE QUOI BOOLEEN, STRING, NUMBER, METHOD ETC

// VOIR AVEC LE FONCTIONNALBASEDCOMP POUR EXAMPLE
  
  // Je redéclare les paramètres envoyés dans une props
  const {flag, data} = props;

  return(
    <div>
      {/* Si la valeur de flag dans la prop est vrai alors j'affiche le contenu de data si false j'affiche juste Example de prop issus de ma prop */}
      {
        // flag && data - Si flag est vrai alors affiche 
        flag ? data : 'flag est en faux' //Si flag en faux alors affiche comme quoi c'est le cas !
      }
      Example de prop
    </div>
  )
}

// J'exporte ma fonction au lieu du nom du composant 
export default PropExample;