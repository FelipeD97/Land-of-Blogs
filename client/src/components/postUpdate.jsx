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

    handleChange(e) {
        const { content } = e.target;

        this.setState({
            [content]: []
        });
      }
    
      handleSubmit = e => {
          e.preventDefault();
          const { content } = this.state;
          const post_id = this.props.match.params.id;

          const data = { post_id, content };

          this.loadData(data);
      }

    //   updatePost = async data => {
    //       const response
    //   }
    

    render() {
        const { post } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
              Your Name
              <input
                type="text"
                value={post.title}
                placeholder="Your Name"
                name="username"
                onChange={this.handleChange}
              />
            </label>
                <label>
                    <textarea
                    name="Update"
                    value={post.content}
                    placeholder={post.content}
                    onChange={this.handleChange}
                    />
                </label>
                <button 
                type="submit">
                    Update
                </button>
            </form>
            <ul>
                {post.map(update => (
                    <li key={update.id}>
                        <p>{update.content}</p>
                    </li>
                ))}
            </ul>
            </div>
            
        );
    }
}

export default PostUpdate;