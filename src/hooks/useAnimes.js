import {useContext, useEffect, useState} from 'react'
import getAnimes from '../services/getAnimes'
import AnimeContext from '../context/AnimesContext'

export function useAnimes({ keyword, rating } = { keyword: null}){
    const [ loading, setLoading ] = useState(false)
    const { animes, setAnimes } = useContext(AnimeContext)
    //const [ animes, setAnimes ] = useState([])
    
    useEffect(function() {
        setLoading(true)
        // recuperar keyword del localstorage
        const keywordToUse = keyword || localStorage.getItem
        ('lastKeyword') || 'Naruto'
        
        getAnimes({keyword : keywordToUse, rating})
        .then(animes => {
            setAnimes(animes)
            setLoading(false)
            //guardar keyword en localstorage
            localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword, rating, setAnimes])

    return {loading, animes}

}