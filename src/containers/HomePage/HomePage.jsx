//Library
import React, {Component, Fragment, createContext} from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

//Pages
import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetaiPost/DetailPost";
import HeaderList from "../pages/HeadersList/HeaderList";
import HelloComponent from "../pages/HeloPage/HelloComponent"
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import MovieComponent from "../pages/MovieComponent/MovieComp";

//Styles
import './HomePage.css'


// Context API React for State Management
export const rootContext = createContext();
const Provider = rootContext.Provider;


// Satate Full Component 
class HomePage extends Component {
    state = {
        totalOrder: 0
    }

    dispatch = (action) => {
        switch (action.type) {
            case 'counter/addOrder':
                return this.setState({
                    totalOrder: this.state.totalOrder + 10
                })

            case 'counter/minusOrder':  
                if (this.state.totalOrder > 0) {
                    return this.setState({
                        totalOrder: this.state.totalOrder - 10
                    })
                }
  
                return this.setState({
                    totalOrder: 0
                })
        
            default:
                return this.state;
        }
    }

    render(){
        return (
            <BrowserRouter>
            <Provider value={
                {
                    state: this.state,
                    dispatch:this.dispatch
                }
            }>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Home</Link>
                        <Link to="/life-cycle">Life Cycle Component</Link>
                        <Link to="/blogpost">Blog Post</Link>
                        <Link to="/movielist">Movie List</Link>
                        <Link to="/moviecomp">Component Movie</Link>
                    </div>
                    <Routes>
                            <Route path="/" element={<HelloComponent/>}/>
                            <Route path="/life-cycle" element={<LifeCycleComp/>}/>
                            <Route path="/blogpost" element={<BlogPost/>}/>
                            <Route path="/detail-post/:id" element={<DetailPost/>}/>
                            <Route path="/movielist" element={<HeaderList/>}/>
                            <Route path="/moviecomp" element={<MovieComponent/>}/>
                    </Routes>
                </Fragment>
            </Provider>
            </BrowserRouter>
        )
    }
}


export default HomePage;