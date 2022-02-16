import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import './BlogPost.css'

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 3
        }
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((result) => {
                this.setState({
                    post: result.data
                })
            })
    }

    postDatatoAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
        .then((res) => {
            console.log('success!', res)
            this.getPostAPI();
        }, (err) => {
            console.log('error', err)
        })
    }

    handleformChange = (event) => {
        // console.log('form-change', event.target)
        let formBlogPostnew = {...this.state.formBlogPost};
        let timeStamp = new Date().getTime();
        formBlogPostnew['id'] = timeStamp;
        formBlogPostnew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostnew
        })
    }

    handleSubmitClick = () => {
        // console.log('submited!!', this.state.formBlogPost);
        this.postDatatoAPI();
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
            .then((res) => {
                this.getPostAPI();
            })
    }

    componentDidMount() {
        this.getPostAPI();
    }

    render() {
        return (
            <Fragment>
                <div className='container'>
                    <div id="contact">
                        <h3>Form Add Post ReactJS</h3>
                        <fieldset>
                            <label>
                                Blog Title <br />
                            <input name='title' placeholder="Your Blog Title here ..." type="text" tabIndex={4} required onChange={this.handleformChange}/>
                            </label>
                        </fieldset>
                        <fieldset>
                            <label>
                                Blog Content <br />
                            <textarea name='body' placeholder="Your Blog Content here ..." tabIndex={5} required onChange={this.handleformChange}/>
                            </label>
                        </fieldset>
                        <fieldset>
                            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" onClick={this.handleSubmitClick}>Submit</button>
                        </fieldset>
                    </div>
                </div>
                <h1>Blog Cards</h1>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;