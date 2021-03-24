import React from 'react'
import ListOfAnime from '../../components/ListOfAnime'
import getAnimes from '../../services/getAnimes'
import Spinner from '../../components/spinner/index'
import {useAnimes} from '../../hooks/useAnimes'

export default function SearchResults({ params }){
    const { keyword } = params
    const { loading, animes } = useAnimes({ keyword })

    return <>
        {loading
            ? <Spinner/>
            : <ListOfAnime animes={animes}/>
        }
        </>
}