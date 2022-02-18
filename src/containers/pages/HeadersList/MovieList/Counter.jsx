import React, {Component} from "react";
import { connect } from "react-redux";
import ActionType from "../../../../redux/reducer/globalActionType";

class Counter extends Component{
    
    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }
    
    // handleClickAdd = () => {
    //     this.setState({
    //         order: this.state.order + 28
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })
    // }

    // handleClickRemove = () => {
    //     this.setState({
    //         order: this.state.order - 28
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })
    // }

    render() {
        console.log(this.props)
        return (
            <div className="counter">
                <button className="ticket__addcart-btn" onClick={this.props.handleClickAdd}>Add to Cart</button>
                <button className="ticket__removecart-btn" onClick={this.props.handleClickRemove}>Remove from Cart</button>
            </div>
        );
    }
}

// getState #3
const mapStateToProps = (state) => {
    return{
        order: state.totalOrder
    }
}

// dispatch #4
const mapDispatchToProps = (dispatch) => {
    return{
        handleClickAdd : () => dispatch({type: ActionType.addOrder}),
        handleClickRemove: () => dispatch({type: ActionType.minusOrder})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);