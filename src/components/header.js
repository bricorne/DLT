import React from 'react';
import TypingEffect from './TypingEffect';

function Header() {
    return (
        <header>
            <div id="logo">
                <img src="/img/logo.png" alt='logo' />
            </div>
            <div id="fav-champ">
                    <TypingEffect text="Champions favoris :"/>
                <img src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Kled.png" alt='champion' />
                <img src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Darius.png" alt='champion' />
                <img src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Sett.png" alt='champion' />
                <img src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Urgot.png" alt='champion' />
                <img src="https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/Kayn.png" alt='champion' />
            </div>
            <div id="login">
                    <TypingEffect text="Se connecter" />
            </div>
        </header>
    );
}

export default Header;