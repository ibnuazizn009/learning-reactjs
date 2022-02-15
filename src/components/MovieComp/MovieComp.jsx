import React from "react";
import './MovieComp.css'

// State Less Component
const MovieComp = (props) => {
    return(
            <div className="hero-container">
                <div className="main-container">
                    <div className="poster-container">
                        <img src={props.image} alt="" className="poster"/>
                    </div>
                    <div className="ticket-container">
                        <div className="ticket__content">
                            <h4 className="ticket__movie-title">{props.title}</h4>
                            <p className="ticket__movie-slogan">
                                {props.slogan}
                            </p>
                            <p className="ticket__current-price">$28.00</p>
                            <p className="ticket__old-price">$44.99</p>
                            <button className="ticket__buy-btn">Buy now</button>
                        </div>
                    </div>
                </div>
	        </div>
    )
}

// this for default props if in home page not use it
MovieComp.defaultProps = {
    title: 'No Title Found',
    slogan: 'Nothing',
    image: 'https://i.postimg.cc/vmkCLkbr/default-placeholder.png'
}

export default MovieComp;