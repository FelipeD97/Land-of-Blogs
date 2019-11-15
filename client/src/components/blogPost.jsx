import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlogPost extends Component {
    state = {
        post: {}
    };

    async componentDidMount() {
        const post = await this.loadData();
        this.setState({
            post
        });
    }

    loadData = async () => {
        const postId = this.props.match.params.id;
        const url = `http://localhost:9000/blogs/post/${postId}`;
        const response = await fetch(url);
        const data = response.json();

        return data;
    }

    render() {
        const { post } = this.state;

        return (
            <div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <Link to={`/post/update/${post.id}`}>
                    <button>Update</button>
                </Link>
                <button>Delete</button>  
            </div>
        );
    }
}

export default BlogPost;