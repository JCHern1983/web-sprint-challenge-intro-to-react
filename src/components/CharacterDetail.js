import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './CharacterDetail.css'




function Item({match}) {
    const [item, setItem] = useState({})
    const [location, setLocation] = useState({})
    const [origin, setOrigin] = useState({})

    
useEffect(() =>{
    axios.get(`https://rickandmortyapi.com/api/character/${match.params.id}`)
        .then(res =>{
            setItem(res.data)
            setLocation(res.data.location)
            setOrigin(res.data.origin)
        })

},[match.params.id])

  return (
    <div className='profileContainer'>
    <h1 className='detailName'>{item.name}</h1>
    <img className='detailImage' alt='Character Pic' src={item.image}/>
    <h2 className='detailStatus'>Status: {item.status}</h2>
    <h2 className='detailSpecies'>Species: {item.species}</h2>
    <h2 className='detailGender'>Gender: {item.gender}</h2>
    <h2 className='detailLocation'>Current Location: {location.name}</h2>
    <h2 className='detailOrigin'>Origin: {origin.name}</h2>
 
    </div>
  );
}

export default Item;
