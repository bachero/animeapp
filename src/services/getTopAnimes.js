

export default function getTopAnimes(){
    const apiURL = `https://api.jikan.moe/v3/search/anime?q=type=anime&page=1`
      return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {results} = response
        if( Array.isArray(results)){
          const animes = results.map(image => {
              const {image_url, title, mal_id, score, url} = image
              return {image_url, title, mal_id, score, url}
        })
        return animes
      }
      })
  }