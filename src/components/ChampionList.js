import React, { useState, useEffect } from 'react';
import TypingEffect from './TypingEffect';
import { Link } from 'react-router-dom';

function ChampionList() {
  const [champions, setChampions] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Nouvel état pour la chaîne de recherche

  useEffect(() => {
    fetch('https://ddragon.leagueoflegends.com/cdn/14.4.1/data/en_US/champion.json')
      .then(response => response.json())
      .then(data => {
        const fetchedChampions = Object.values(data.data).map(champion => ({
          name: champion.name,
          imageUrl: `https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/${champion.image.full}`
        }));
        setChampions(fetchedChampions);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div id='champ-select'>
      <div id='search-bar'>
        <TypingEffect text="Veuillez sélectionner un champion :" speed={50} />
        {/* Champ de saisie pour la recherche */}
        <input
          type="text"
          placeholder="Rechercher un champion..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div id="all-champ">
        {champions
          .filter(champion => champion.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((champion) => (
            <div className='champion'>
              <Link to={`/champion/${champion.name}`} key={champion.name}>
                <img src={champion.imageUrl} alt={champion.name} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ChampionList;
