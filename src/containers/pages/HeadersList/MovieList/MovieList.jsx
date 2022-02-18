import React, { Component } from "react";
import Counter from "./Counter";

class MovieList extends Component {
    render(){
        return(
                <div className="hero-container">
                    <div className="main-container">
                        <div className="poster-container">
                            <img src="https://i.postimg.cc/QCH0Pc1Z/justice-league2.jpg" alt="" className="poster"/>
                        </div>
                        <div className="ticket-container">
                            <div className="ticket__content">
                                <h4 className="ticket__movie-title">Justice League</h4>
                                <p className="ticket__movie-slogan">
                                    None
                                </p>
                                <p className="ticket__current-price">$28.00</p>
                                <p className="ticket__old-price">$44.99</p>
                                <button className="ticket__buy-btn">Buy now</button>
                                <Counter onCounterChange = {(value)=> this.props.onCounterChange(value)}/>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default MovieList;