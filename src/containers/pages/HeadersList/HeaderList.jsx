import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import MovieList from "./MovieList/MovieList";
import './HeaderList.css'

class HeaderList extends Component {

    // state = {

    // }
    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render(){
        return(
            <Fragment>
                    <div className="wrap">
                        <div className="buttonCart" tabIndex={0}>
                            <div className="cart" alt="cart"></div>
                                <span className="price">${this.props.order}</span>
                        </div>
                    </div>
                <MovieList/>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        order: state.totalOrder
    }
}


export default connect(mapStateToProps)(HeaderList);