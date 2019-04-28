export const POST_COMMENT = "post_comment"
export const saveComment = (comment) => {
    return {
        type: POST_COMMENT,
        payload: comment
    }
}