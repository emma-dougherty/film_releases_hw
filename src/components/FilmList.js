import React from "react"
import FilmItem from "./FilmItem"

const FilmList = ({films}) => {

    const filmNodes = films.map(film => {
        return (
            <>
            <FilmItem name={film.name} url={film.url} key={film.id}>  </FilmItem>
        
            </>
        )
    })

    return (
        <>
        {filmNodes}
    
        </>
    )
}

export default FilmList