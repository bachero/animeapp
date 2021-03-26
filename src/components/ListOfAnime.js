import React from 'react'
import Anime from './Animes'
import './ListOfAnime.css'

function ListOfAnime ({animes}) {
        return <div className='ListOfAnime'>
        {
            animes.map(({mal_id, title, image_url, url}) => 
                <Anime
                    key={mal_id} 
                    title={title} 
                    mal_id={mal_id} 
                    image_url={image_url}
                    url = {url}>
                </Anime>
            )
        }
        </div>
}

export default React.memo(ListOfAnime)
    