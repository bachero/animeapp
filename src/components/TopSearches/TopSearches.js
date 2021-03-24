import React, { useState, useEffect } from 'react'
import getTopAnimes from '../../services/getTopAnimes'
import Category from '../Category/index'


export default function TopSearches(){
    const [tops, setTops] = useState([])

    useEffect(function(){
        getTopAnimes().then(setTops)

    }, [])

    return <Category name='Top Visualizaciones' options={tops} />
}