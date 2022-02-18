import React, { Component, Fragment } from "react";
import MovieList from "./MovieList/MovieList";
import './HeaderList.css'

class HeaderList extends Component {
    state = {
        order: 0
    }
    
    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                    <div className="wrap">
                        <div className="buttonCart" tabIndex={0}>
                            <div className="cart" alt="cart"></div>
                                <span className="price">${this.state.order}</span>
                        </div>
                    </div>
                <MovieList onCounterChange = {(value)=> this.handleCounterChange(value)}/>
            </Fragment>
        )
    }
}

export default HeaderList;