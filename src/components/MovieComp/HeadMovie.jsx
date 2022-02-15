import React from "react";
import './HeadMovie.css';

const HeadMovie = () => {
    return (
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
                    <span className="price">$0</span>
                </div>
            </div>
        </header>
    )
}

export default HeadMovie;