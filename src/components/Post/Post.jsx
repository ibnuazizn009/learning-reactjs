import React from "react";
import { useNavigate } from "react-router-dom";

const Post = (props) => {
    let navigate = useNavigate()
    function handleNavigate() {
        navigate(`/detail-post/${props.data.id}`, {state: props.data})
    }
    return (
            <div className="cards">
                <button className='card'>
                    <div className="card-hero">
                        <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDI3Nzg4NQ&ixlib=rb-1.2.1&q=85" width="288" alt='' />
                    </div>
                    <div className="card-header">
                        <h3 onClick={handleNavigate}>{props.data.title}</h3>
                    </div>
                    <div className="card-body">
                        <p>{props.data.body}</p>
                    </div>
                    <div className="card-footer">
                        <div className="footer-item">
                            <img src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDI3Nzc5MQ&ixlib=rb-1.2.1&q=85" className="avatar" width="32" height="32" alt='' />
                        </div>
                        <div className="footer-item">
                            <strong>John Doe</strong>
                            <span className="muted">2h ago</span>
                            <span><a className="remove" href="#?" role={'button'} onClick={()=>props.remove(props.data.id)}>Remove</a><a className="update" href="#?" role={'button'} onClick={()=>props.update(props.data)}>Update</a></span>
                            
                        </div>
                    </div>
                </button>
            </div>
    )
}

export default Post