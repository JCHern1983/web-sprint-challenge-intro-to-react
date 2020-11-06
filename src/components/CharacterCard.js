import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom'
import {Card} from '../components/styled-components/index'


const CharacterCard = (props) => {
    return(
        <Card>
        <div className='text'>
        <h1 className='CardText'>{props.name}</h1>
        <span><h2 className='CardInfo'> {props.status} - {props.species}</h2></span> 
        <h2 className='CardInfo'>Location: {props.location}</h2>
        </div>
       <Link to ={`Characters/${props.id}`}><img className='pic' alt='Character Pic' src={props.image}/></Link>

        </Card>
        
    )
}

export default CharacterCard;