import React, {Component} from "react";
import { globalConsumer } from "../../../../context/context";
// import { connect } from "react-redux";
import ActionType from '../../../../redux/reducer/globalActionType';
class Counter extends Component{
    
    render() {
        // console.log(this);
        return (
            <div className="counter">
                <button className="ticket__addcart-btn" onClick={()=>this.props.dispatch({type: 'counter/addOrder'})}>Add to Cart</button>
                <button className="ticket__removecart-btn" onClick={()=>this.props.dispatch({type: 'counter/minusOrder'})}>Remove from Cart</button>
            </div>   
        )
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
export default globalConsumer(Counter);