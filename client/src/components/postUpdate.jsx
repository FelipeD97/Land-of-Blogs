import React, { Component } from "react";

class PostUpdate extends Component {
    state = {
        post: {}
    };

    // async componentDidMount() {
    //     const post = await this.loadData();
    //     this.setState({
    //         post
    //     });
    // }

    loadData = async () => {
        const postId = this.props.match.params.id;
        const url = `http://localhost:9000/blogs/post/update/${postId}`;
        const response = await fetch(url);
        const data = response.json();

        return data;
    }

    handleChange(content) {
        this.setState({value: content.target.value});
      }
    
      handleSubmit(post) {
        post.preventDefault();
      }
    

    render() {
        const { post } = this.state;

        return (

            <form onSubmit={this.handleSubmit}>
                <label>
                    <h2>{post.title}</h2>
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </label>
                <input type="submit" value="Update"></input>
            </form>
        );
    }
}

export default PostUpdate;