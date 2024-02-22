import React from 'react';
import Typewriter from 'react-typewriter-effect';

function Main() {
    return (
        <main>
            <div id='champ-select'>
                <p>
                    <Typewriter
                        className="typewriter-text"
                        text="Veuillez sélectionner un champion :"
                        cursor="|"
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={100}
                    />
                </p>
            </div>
        </main>
    );
}

export default Main;