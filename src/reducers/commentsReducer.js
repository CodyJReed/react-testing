import { POST_COMMENT } from "../actions";

export default (state = [], action) => {
    switch (action.type) {
        case POST_COMMENT:
            return [...state, action.payload]
        default:
          return state
    }
}