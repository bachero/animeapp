import React from "react"
import { Link } from "wouter"
import ListOfAnime from '../../components/ListOfAnime'
import {useAnimes} from '../../hooks/useAnimes'
import TopSearches from "../../components/TopSearches"
import './home.css'
import SearchForm from "../../components/SearchForm"
import { Helmet } from 'react-helmet'

const POPULAR_GIFS = ["Naruto", "One Piece", "Sailor Moon", "FLCL", "Attack of Taitans"]


export default function Home(){  
    const { loading, animes } = useAnimes()
    

    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" context="Bienvenido a la Home de AnimeTV"></meta>
            </Helmet>
            <header className="o-header">
            <SearchForm/>
            </header>
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

