import { useState } from "react";
import './Menu.css'
import { Bouton } from "../Bouton/Bouton";


export function Menu(){
    let [currentState, currentStateChange] = useState("show");
    let [menuClass, menuClassChange] = useState("hideMenu");
    function switchMenu(){
        if(currentState == "show"){
            currentStateChange("hide");
            menuClassChange("showMenu");
        }
        else{
            currentStateChange("show");
            menuClassChange("hideMenu");
        }
    }
    return (
        <>
            <div className={menuClass}>
                <ul>
                    <li>
                        <a>Login</a>
                    </li>
                    <li>
                        <a>Signup</a>
                    </li>
                    <li>
                        <a>About us</a>
                    </li>
                    <li>
                        <a>Contact us</a>
                    </li>
                </ul>
            </div>
            <div>
                <Bouton clickAction={switchMenu} action={currentState} className="menuButton"/>
            </div>
        </>
    )
}