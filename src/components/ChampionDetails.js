import React from 'react';
import { useParams } from 'react-router-dom';

function ChampionDetails() {
    let { name } = useParams();

    return (
        <div>
            <h1>{name}</h1>
            {/* Affichez d'autres détails du champion ici */}
        </div>
    );
}

export default ChampionDetails;
