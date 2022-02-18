//Library
import React, {Component, Fragment} from "react";
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

// Satate Full Component 
class HomePage extends Component {
    state = {
        showComponent: true
    }

    render(){
        return (
            <BrowserRouter>
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
            </BrowserRouter>
        )
    }
}


export default HomePage;