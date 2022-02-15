import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import './BlogPost.css'

class BlogPost extends Component {
    state = {
        post: []
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts')
        .then((result)=>{
            this.setState({
                post: result.data
            })
        })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
        .then((res)=>{
            this.getPostAPI();
        })
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })
        this.getPostAPI();
    }

    render() {
        return (
            <Fragment>
                <h1>Blog Cards</h1>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;