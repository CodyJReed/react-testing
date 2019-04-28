export const POST_COMMENT = "post_comment"
export const postComment = (comment) => {
    return {
        type: POST_COMMENT,
        payload: comment
    }
}