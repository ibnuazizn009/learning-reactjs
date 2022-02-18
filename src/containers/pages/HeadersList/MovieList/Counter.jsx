import React, {Component} from "react";
// import { connect } from "react-redux";
import ActionType from "../../../../redux/reducer/globalActionType";
import { rootContext } from "../../../HomePage/HomePage";
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
        return (
            <rootContext.Consumer>
                {
                    value => {
                        console.log(value.state.totalOrder)
                        return(
                            <div className="counter">
                                <button className="ticket__addcart-btn" onClick={()=>value.dispatch({type: 'counter/addOrder'})}>Add to Cart</button>
                                <button className="ticket__removecart-btn" onClick={()=>value.dispatch({type: 'counter/minusOrder'})}>Remove from Cart</button>
                            </div>
                        )
                    }
                }
            </rootContext.Consumer>
        );
    }
}

// getState #3 Redux
// eslint-disable-next-line
const mapStateToProps = (state) => {
    return{
        order: state.totalOrder
    }
}

// dispatch #4 Redux
// eslint-disable-next-line
const mapDispatchToProps = (dispatch) => {
    return{
        handleClickAdd : () => dispatch({type: ActionType.addOrder}),
        handleClickRemove: () => dispatch({type: ActionType.minusOrder})
    }
}

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
export default Counter;