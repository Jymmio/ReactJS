import { useState } from 'react'
import { Bouton } from '../Bouton/Bouton';

export function Compteuer(){
    let [compteur, setCompteur] = useState(3);

    function increase(){
        setCompteur(compteur+1);
    }
    function decrease(){
        setCompteur(compteur-1);
    }

    return (
        <>
            <h3>{compteur}</h3>
            <Bouton clickAction={increase} action='+1'></Bouton>
            <Bouton clickAction={decrease} action='-1'></Bouton>
        </>
    )

}