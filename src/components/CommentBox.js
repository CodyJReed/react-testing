import React from "react"
import {connect} from "react-redux"

import {postComment, fetchComments} from "../actions"
import requireAuth from "./requireAuth"

class CommentBox extends React.Component {
    state = {
        comment: ""
    }

    
    handleChange = event => {
        this.setState({ comment: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.postComment(this.state.comment)

        this.setState({ comment: "" })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}



export default connect(null, {postComment, fetchComments})(requireAuth(CommentBox))