import React from 'react'
import Anime from '../Animes'

import './Category.css'

export default function Category({name, options = [], ...props}){

    return <div className={props.className}>
        <h3 className="Category-title">{name}</h3>
        <ul className="Category-list">
            {options.map((singleOption) => (
                    <Anime
                        key={singleOption.mal_id} 
                        title={singleOption.title} 
                        mal_id={singleOption.mal_id} 
                        image_url={singleOption.image_url}
                        url = {singleOption.url}>
                    </Anime>
            ))}
        </ul>
    </div>
}