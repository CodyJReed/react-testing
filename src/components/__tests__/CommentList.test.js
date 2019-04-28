import React from "react"
import {mount} from "enzyme"

import Root from "../../Root"
import CommentList from "../CommentList"

let wrapped

beforeEach(() => {
    const initialState = {
        comments: ["comment 1", "comment 2"]
    }
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
})

afterEach(() => {
    wrapped.unmount()
})

it("should create on LI per comment", () => {
    expect(wrapped.find("li").length).toEqual(2)
})

it("should display correct text for each comment", () => {
    expect(wrapped.render().text()).toContain("comment 1")
    expect(wrapped.render().text()).toContain("comment 2")
})