import React from 'react';
import TypingEffect from './TypingEffect';
import ChampionList from './ChampionList';

function Main() {
    return (
        <main>
            <div id='champ-select'>
                    <TypingEffect text="Veuillez sélectionner un champion :" speed={50} />
                    <ChampionList />
            </div>
        </main>
    );
}

export default Main;