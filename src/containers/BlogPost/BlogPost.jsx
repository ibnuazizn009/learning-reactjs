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
            userId: 1
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((result) => {
                this.setState({
                    post: result.data
                })
            }, (err) => {
                console.log('Error Get Data', err)
            })
    }

    postDatatoAPI = () => {
        axios.post(`http://localhost:3004/posts`, this.state.formBlogPost)
        .then((res) => {
            console.log('success!', res)
            this.getPostAPI();
        }, (err) => {
            console.log('Error POST', err)
        })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
        .then((res) => {
            console.log('updated!',res)
            this.postDatatoAPI();
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
                isUpdate: false,
            })
        }, (err) => {
            console.log('Error Update', err)
        })
    }

    handleformChange = (event) => {
        // console.log('form-change', event.target)
        let formBlogPostnew = {...this.state.formBlogPost};
        let timeStamp = new Date().getTime();
        if (!this.state.isUpdate) {
            formBlogPostnew['id'] = timeStamp
        }
        formBlogPostnew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostnew
        })
    }

    handleSubmitClick = () => {
        if(this.state.isUpdate){
            this.putDataToAPI();
        }else{
            this.postDatatoAPI();
        }
        // console.log('submited!!', this.state.formBlogPost['title']);
    }

    handleUpdateClick = (data) => {
        console.log('Data', data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
       
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
            .then((res) => {
                this.getPostAPI();
            })
    }

    componentDidMount() {
        console.log('componentDidMount');
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
                            <input name='title' value={this.state.formBlogPost.title} placeholder="Your Blog Title here ..." type="text" required onChange={this.handleformChange}/>
                            </label>
                        </fieldset>
                        <fieldset>
                            <label>
                                Blog Content <br />
                            <textarea name='body' value={this.state.formBlogPost.body} placeholder="Your Blog Content here ..." required onChange={this.handleformChange}/>
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
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdateClick}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;