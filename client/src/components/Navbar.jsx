import { useState } from "react";
import "../styles/Navbar.css";

function Navbar () {

    const [menuState, setMenuState] = useState ({
        burgerClass:"≡",
        menuClass:"hide-menu",
        isMenuClicked:false
    });

    const updateMenu = () => {
            setMenuState(previousState =>({
                burgerClass: previousState.isMenuClicked? "≡":"x",
                menuClass: previousState.isMenuClicked? "hide-menu":"unhide-menu",
                isMenuClicked: !previousState.isMenuClicked
            }));
        };

    return (
        <nav>
            <img src="src\assets\images\Logo_Cocktails_Club.png" alt="Logo Cocktail Club"/>
            <h1>COCKTAIL CLUB</h1>
            <button type="button" onClick={updateMenu} onKeyDown={updateMenu}>{menuState.burgerClass}</button>
            <ul className={menuState.menuClass}>
                <li>Surprise cocktail</li>
                <li>All our club cocktails</li>
                <li>Back home</li>
            </ul>
        </nav>
    )
} 

export default Navbar;