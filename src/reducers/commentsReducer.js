import { POST_COMMENT, FETCH_COMMENTS } from "../actions";

export default (state = [], action) => {
    switch (action.type) {
        case POST_COMMENT:
            return [...state, action.payload]
        case FETCH_COMMENTS:
          const comments = action.payload.map(comment => {
              return comment.name
          })
          return [...state, ...comments]
        default:
          return state
    }
}