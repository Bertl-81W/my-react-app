

import React from "react"
 

export default function Card(props) {
  
    return (
        <div className="card--container">
            
            <div className="image--container">
                <img
                src={`/assets/${props.coverImg}`} className="card--image" alt={props.altText}/>
            </div>

            <div className="bSide"> 
                <div className="card--stats">
                   <img src="/assets/pin.png" className="card--pin"/>                
                   <span className="gray">{props.location.toUpperCase()}</span>                
                   <a className="map--link"  href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                 
                <div className="center--page">
                   <p className="card--title">{props.title}</p>
                   <p className="card--date">{props.visitDate}</p>
                   <span className="bold">{props.description} <a className="bold--text" href={props.link}>Read more</a></span>
                </div>   
            </div>         
        </div>
    )
}


