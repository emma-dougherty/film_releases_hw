import React from "react"

const FilmItem = ({name, url}) => {

    return (
        <ul>
            <li>
                <a href={url}>{name}</a>
            </li>
        </ul>
    )
}

export default FilmItem
