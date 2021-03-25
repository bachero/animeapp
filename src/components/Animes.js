import React from 'react'
import {Link} from 'wouter'
import './Anime.css'
import './ListOfAnime.css'

function Anime({ title, mal_id, image_url, url}){
    return (
        <div className="Anime">
            <a href={`${url}`} className='Anime-link'>
                <h4>{title}</h4>
                <img loading='lazy' alt={title} src={image_url}></img>
            </a>
        </div>
    ) 
    ///anime/${title}/mal_id/${mal_id}
}

export default React.memo(Anime)