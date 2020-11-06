import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CharacterCard from './CharacterCard'
import '../App.css'




export default function Character () {
    const [character, setCharacter] = useState([]);
    const [page2, setPage2] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState(0)
    console.log(page2)

    const handleChange = event => {
        setSearchTerm(event.target.value);
      };

      

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page2}&name=${searchTerm} `)
            .then(res =>{
                console.log(res.data)
                setCharacter(res.data.results)
                setResults(res.data.info)


            })
            .catch(error => {
                console.log('no data coming', error)
            })
    },[searchTerm, page2])


    return(
        <>
        <h1 className='Click'>Click on Images for more info...</h1>
        <div className="SearchBar">
        <input
          type="text"
          placeholder="Search for Character"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className='Reset' onClick={() => setPage2(0)}>Reset/New Search</button>
      </div>
      <div className='PageCount'>
      <h1>Results: {results.count} - Pages: {results.pages} </h1>
      </div>
        <div className='BTN'>
        <button onClick={() => setPage2(page2 - 1)}>Previous</button>
        <button onClick={() => setPage2(page2 + 1)}>Next</button>
        </div>
      <div className='characters'>
      {character.map(item =>{
          return (
              <CharacterCard
              key={item.id}
              id={item.id}
              name={item.name}
              status={item.status}
              image={item.image}
              species={item.species}
              location={item.location.name}
              />
          )
      })}
      
      </div>
      </>
    )
}