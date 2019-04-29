import React from "react"
import { Route } from "react-router-dom"

import CommentList from "./CommentList"
import CommentBox from "./CommentBox"

const App = () => {
    return (
        <div>
            <Route path="/post" component={CommentBox}/>
            <Route exact path="/" component={CommentList} />
        </div>
    )
}
export default App