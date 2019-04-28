import React from "react"
import { shallow } from "enzyme"

import App from "../App"
import CommentBox from "../CommentBox"
import CommentList from "../CommentList"
import { exportAllDeclaration } from "@babel/types";

let wrapped

beforeEach(() => {
    wrapped = shallow(<App />)
})

it("Shows a comment box", () => {

    expect(wrapped.find(CommentBox).length).toEqual(1)
})

it("Shows a comment list", () => {

    expect(wrapped.find(CommentList).length).toEqual(1)
})