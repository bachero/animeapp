import React, { useEffect, useState } from "react"
import { Link, useLocation } from "wouter"
import getAnimes from '../../services/getAnimes'
import ListOfAnime from '../../components/ListOfAnime'
import {useAnimes} from '../../hooks/useAnimes'
import TopSearches from "../../components/TopSearches"
import './home.css'
import SearchForm from "../../components/SearchForm"
const POPULAR_GIFS = ["Naruto", "One Piece", "Sailor Moon", "FLCL", "Attack of Taitans"]


export default function Home(){  
    const [path, pushLocation] = useLocation()
    const { loading, animes } = useAnimes()

    const handleSubmit = ({keyword}) => {
        pushLocation(`/anime/${keyword}`)

    }

    return (
        <div>
            <SearchForm onSubmit={handleSubmit}/>
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

