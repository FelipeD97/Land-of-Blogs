import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlogList extends Component {
    state = {
        blogs: []
    };

    async componentDidMount() {
        const blogs = await this.loadData();
        this.setState({
            blogs
        });
    }

    loadData = async () => {
        const url = "http://localhost:9000/blogs/all";
        const response = await fetch(url);
        const data = response.json();

        console.log("data is", data);

        return data;
    }

    render() {
        const { blogs } = this.state;

        console.log("posts", blogs);

        return (
            <>
                <h2>Blog Post</h2>
                <ul>
                    {blogs.map( blogs => {
                        return (
                            <li key={blogs.id}>
                                <Link to={`/all`}>{blogs.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default BlogList;