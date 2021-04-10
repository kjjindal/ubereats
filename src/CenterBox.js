import React from 'react'
import './CenterBox.css';


function CenterBox({title,description,imgurl}){
    return (
        <>
        <div className="centerbox">
            <img src={imgurl} alt={title} />
            <h2>{title} </h2>
            <h3> {description} </h3>



        </div>


        </>
    )
}

export default CenterBox