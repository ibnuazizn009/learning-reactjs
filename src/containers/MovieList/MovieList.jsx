import React, { Component } from "react";

class MovieList extends Component {
    state = {
        order: 0
    }
    
    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }
    
    handleClickAdd = () => {
        this.setState({
            order: this.state.order + 28
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleClickRemove = () => {
        this.setState({
            order: this.state.order - 28
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

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
                                <button className="ticket__addcart-btn" onClick={this.handleClickAdd}>Add to Cart</button>
                                <button className="ticket__removecart-btn" onClick={this.handleClickRemove}>Remove from Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default MovieList;