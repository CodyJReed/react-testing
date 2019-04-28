import {postComment, POST_COMMENT} from "../index"

describe("postComment", () => {

    it("has the correct type", () => {
        const action = postComment()

        expect(action.type).toEqual(POST_COMMENT)
    })

    it("has the correct payload", () => {
        const action = postComment("new comment")

        expect(action.payload).toEqual("new comment")
    })
})