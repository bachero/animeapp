import React, {useState} from 'react'

function SearchForm({ onSubmit }){
    const [keyword, setKeyword] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        onSubmit({keyword})
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' value={keyword} />
            <input type="submit" value="Buscar"/>
        </form>

    )
} 
export default React.memo(SearchForm)