import React, { Component, Fragment } from "react";
import MovieList from "../MovieList/MovieList";
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
                <header id='header'>
                    <div class='logo'>Logo Here</div>
                    <nav>
                        <ul class='navbar'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <a href="#signin" class="sign-in">
                        <button class="btn-contact">Sign in</button>
                    </a>
                    <div className="wrap">
                        <div className="buttonCart" tabIndex={0}>
                            <div className="cart" alt="cart"></div>
                                <span className="price">${this.state.order}</span>
                        </div>
                    </div>
                </header>
                <MovieList onCounterChange = {(value)=> this.handleCounterChange(value)}/>
            </Fragment>
        )
    }
}

export default HeaderList;