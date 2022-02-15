import React from "react";
import './HeaderMovie.css';

const HeaderMovie = () => {
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
            <i class="fa fa-shopping-cart" id="cart"></i>
        </header>
    )
}

export default HeaderMovie;