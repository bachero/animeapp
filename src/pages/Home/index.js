import React, { useEffect, useState } from "react"
import { Link, useLocation } from "wouter"
import getAnimes from '../../services/getAnimes'
import ListOfAnime from '../../components/ListOfAnime'
import {useAnimes} from '../../hooks/useAnimes'
import TopSearches from "../../components/TopSearches"

const POPULAR_GIFS = ["Naruto", "One Piece", "Sailor Moon", "FLCL", "Attack of Taitans"]


export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    
    const { loading, animes } = useAnimes()

    const handleSubmit = evt => {
        evt.preventDefault()
        console.log(keyword)
        pushLocation(`/anime/${keyword}`)

    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' value={keyword} />
                <input type="submit" value="Buscar"/>
            </form>
            <h3 className="App-title">Última Búsqueda</h3>
            <ListOfAnime animes={animes}/>
            <h3 className="App-title">Sugerencias</h3>
            <ul>
            {POPULAR_GIFS.map((popularAnime) => (
                <li key={popularAnime}>
                    <Link to={`/anime/${popularAnime}`}>{popularAnime}</Link>
                </li>
            ))}
            </ul>
            <div>
                <TopSearches></TopSearches>
            </div>
        </div>
    )
}

