import Axios from "axios";

export const POST_COMMENT = "post_comment"
export const postComment = comment => {
    return {
        type: POST_COMMENT,
        payload: comment
    }
}

export const FETCH_COMMENTS = "fetch_comments"
export const fetchComments = () => async dispatch => {
    const response = await Axios.get("http://jsonplaceholder.typicode.com/comments")

    dispatch({
        type: FETCH_COMMENTS,
        payload: response.data
    })
}

export const CHANGE_AUTH = "change_auth"
export const changeAuth = isLoggedIn => {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}