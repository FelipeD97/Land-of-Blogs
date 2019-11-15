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

        console.log("data", data);

        return data;
    }

    render() {
        const { blogs } = this.state;
        

        return (
            <>
                <h2>Blogs</h2>
                <ul>
                    {blogs.map( blogs => {
                        return (
                            <li >
                                <Link to={`post/${blogs.id}`}>{blogs.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default BlogList;