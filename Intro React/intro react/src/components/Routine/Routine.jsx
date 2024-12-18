import { Bouton } from "../Bouton/Bouton"
Routine.propTypes = {

};

function manger(){
    alert("Bon appetit");
}
function dormir(){
    alert("ZZZ");
}
function etudier(){
    alert("Studying...");
}
export function Routine(){
    return(
        <>
            <div>
            <Bouton clickAction={manger} action={ "Manger" } />
            <Bouton clickAction={dormir} action={ "Dormir" } />
            <Bouton clickAction={etudier} action={ "Étudier" } />
            </div>
        </>
    )
}