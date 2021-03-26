import React from 'react'
import ListOfAnime from '../../components/ListOfAnime'
import getAnimes from '../../services/getAnimes'
import Spinner from '../../components/spinner/index'
import {useAnimes} from '../../hooks/useAnimes'
import { Helmet } from 'react-helmet'

function SearchResults({ params }){
    const { keyword } = params
    const { loading, animes } = useAnimes({ keyword })

    return <>
        {loading
            ?   <>
                    <Helmet>
                        <title>Cargando...</title>
                        <meta name="description" context="Cargando Página"></meta>
                        <meta name="rating" content="General"></meta>
                    </Helmet>
                    <Spinner/>
                </>
            :   <>
                    <Helmet>
                        <title>{keyword}</title>
                        <meta name="description" context={keyword}></meta>
                    </Helmet>
                    <ListOfAnime animes={animes}/>
                </>
        }
        </>
}

export default React.memo(SearchResults)