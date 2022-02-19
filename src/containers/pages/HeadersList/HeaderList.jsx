import React, { Component, Fragment } from "react";
// import { connect } from "react-redux";
import MovieList from "./MovieList/MovieList";

import './HeaderList.css'
import { globalConsumer } from "../../../context/context";

class HeaderList extends Component {

    render() {
        return (
            <Fragment>
                <div className="wrap">
                    <div className="buttonCart" tabIndex={0}>
                        <div className="cart" alt="cart"></div>
                        <span className="price">${this.props.state.totalOrder}</span>
                    </div>
                </div>
                <MovieList />
            </Fragment>
        )
    }
}

// Redux
// eslint-disable-next-line
const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}


// export default connect(mapStateToProps)(HeaderList);
export default globalConsumer(HeaderList);