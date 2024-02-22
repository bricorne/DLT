import React, { useState, useEffect } from 'react';

function ChampionList() {
  const [champions, setChampions] = useState([]);

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
      <div id="allChamp">
        {champions.map((champion, index) => (
          <div key={index} className='champion'>
            <a href={`?detail-champ=${champion.name}`}><img src={champion.imageUrl} alt={champion.name} /></a>
          </div>
        ))}
      </div>
  );
}

export default ChampionList;
