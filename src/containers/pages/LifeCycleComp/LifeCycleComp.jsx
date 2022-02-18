import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import './LifeCycleComp.css';

class LifeCycleComp extends Component {
    //life Cycle Component Constructor
    constructor(props){
        super(props)
        this.state = {
            count: 1
        }
        console.log('constructor')
    }
    //life Cycle Component getDrivedStateFromProps
    static getDerivedStateFromProps (props, state){
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount () {
        console.log('componentDidMount')
        // setTimeout(()=> {
        //     this.setState({
        //         count: 2
        //     })
        // }, 5000);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.group('shouldComponentUpdate')
        console.log('nextProps', nextProps)
        console.log('nextState', nextState)
        console.log('this.state', this.state)
        console.groupEnd()
        if(nextState.count >= 5){
            return false
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return null;
    }
    
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
    }
    
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    
    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
            <Fragment>
            <button className="btn" onClick={this.changeCount}>Life Cycle Component {this.state.count}</button>
            <hr />

            <h3 className='product-total'>Total Product: ${this.props.order}</h3>
            </Fragment>
        )
    }
}

const mapsStateToProps = (state) =>{
    return{
        order: state.totalOrder
    }
}


export default connect(mapsStateToProps)(LifeCycleComp);