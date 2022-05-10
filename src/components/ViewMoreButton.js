import React from "react"



const ViewMoreButton = ({text, url}) => {

    return (
        <>
        <a href={url}>
            <button type="button"> {text} </button> 
        </a>
        </>
    )
}

export default ViewMoreButton