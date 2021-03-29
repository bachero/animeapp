import React from 'react'
import { useLocation } from "wouter"
import useForm from './hook'

const RATINGS = ['pg13', 'pg', 'g', 'r17', 'r', 'rx']

function SearchForm({initialKeyword = '', initialRating}){
    //const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
    //const [rating, setRating] = useState(initialRating)
    //const [times, setTimes] = useState(0)

    const [path, pushLocation] = useLocation()
    const {keyword, rating, times, updateKeyword, updateRating} = useForm({initialKeyword, initialRating})


    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/anime/${keyword}/${rating}`)
    }

    const handleChange = evt => {
        updateKeyword(evt.target.value)
    }

    const handleChangeRating = (evt) => {
        updateRating(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' value={keyword} />
            <select onChange={handleChangeRating} value={rating}>
                <option disabled>Rating type</option>
                {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
            </select>
            <input type="submit" value="Buscar"/>
            <small>{times}</small>
        </form>

    )
} 
export default React.memo(SearchForm)