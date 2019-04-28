import React from "react"
import ReactDOM from "react-dom"

import App from "../App"
import { exportAllDeclaration } from "@babel/types";

it("Shows a comment box", () => {
    const div = document.createElement("div")

    ReactDOM.render(<App/>, div)
    
    expect(div.innerHTML).toContain("Comment Box")

    ReactDOM. unmountComponentAtNode(div)
})