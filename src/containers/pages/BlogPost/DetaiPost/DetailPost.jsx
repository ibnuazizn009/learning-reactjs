import React, { Component, Fragment } from "react";
import { useLocation } from "react-router-dom";
import './DetailPost.css'

export function withRouter(Children){
    return(props)=>{
       const location = useLocation()
       return <Children {...props} location={location.state}/>
   }
}

class DetailPost extends Component{
    render(){
        const details = this.props.location
        // console.log(details.body);
        return(
            <Fragment>
                <div className="post-detail">
                    <h1 className="pst">Detail Post</h1>
                    <br />
                    <p className="detail-title">{details.title}</p>
                    <p className="detail-body">{details.body}</p>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(DetailPost);