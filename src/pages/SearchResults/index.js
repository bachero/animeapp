import React from 'react'
import ListOfAnime from '../../components/ListOfAnime'
import Spinner from '../../components/spinner/index'
import {useAnimes} from '../../hooks/useAnimes'
import { Helmet } from 'react-helmet'
import SearchForm from "../../components/SearchForm"
function SearchResults({ params }){
    const { keyword, rating = 'pg13' } = params
    const { loading, animes } = useAnimes({ keyword, rating })

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
                        <title>{decodeURI(keyword)}</title>
                        <meta name="description" context={keyword}></meta>
                    </Helmet>
                    <header className="o-header">
                        <SearchForm initialKeyword={keyword} initialRating={rating}/>
                    </header>
                    <ListOfAnime animes={animes}/>
                </>
        }
        </>
}

export default React.memo(SearchResults)