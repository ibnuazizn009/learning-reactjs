import React from "react";
import BlogPost from "../BlogPost/BlogPost";
import HeaderList from "../HeadersList/HeaderList";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";

// Satate Full Component 
class HomePage extends React.Component {
    state = {
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)
    }

    render(){
        return (
            <div>
                <HeaderList/>
                <p>Life Cycle Component</p>
                <hr />
                {
                    this.state.showComponent 
                    ?
                    <LifeCycleComp/> 
                    : null
                }
                <BlogPost/>
            </div>
        )
    }
}

export default HomePage;