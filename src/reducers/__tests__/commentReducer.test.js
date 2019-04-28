import commentsReducer from "../commentsReducer"
import { POST_COMMENT } from "../../actions"

it("should handle actions of POST_COMMENT", () => {
    const action = {
        type: POST_COMMENT,
        payload: "new comment"
    }

    const newState = commentsReducer([], action)

    expect(newState).toEqual(["new comment"])
})

it("should handle actions with unknown type", () => {
   const newState = commentsReducer([], { type: "UNKNOWN"})

   expect(newState).toEqual([])
})