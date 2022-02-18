import React, { Component, Fragment } from "react";
// import { connect } from "react-redux";
import MovieList from "./MovieList/MovieList";
import { rootContext } from "../../HomePage/HomePage";

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
            <rootContext.Consumer>
                {
                    value => {
                        return(
                            <Fragment>
                                    <div className="wrap">
                                        <div className="buttonCart" tabIndex={0}>
                                            <div className="cart" alt="cart"></div>
                                                <span className="price">${value.state.totalOrder}</span>
                                        </div>
                                    </div>
                                <MovieList/>
                            </Fragment>
                        )
                    }
                }
            </rootContext.Consumer>
        )
    }
}

// Redux
// eslint-disable-next-line
const mapStateToProps = (state) => {
    return{
        order: state.totalOrder
    }
}


// export default connect(mapStateToProps)(HeaderList);
export default HeaderList;