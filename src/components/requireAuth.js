import React from "react"
import { connect } from "react-redux"

export default ChildComponent => {
    class ComposedComponent extends React.Component {

        componentDidMount() {
            this.checkAuth()
        }

        componentDidUpdate() {
            this.checkAuth()
        }

        checkAuth() {
            if (!this.props.auth) {
                this.props.history.push("/")
            }
        }

        render () {
            return <ChildComponent {...this.props} />
        }
    }

    const mapStateToProps = ({ auth }) => ({ auth })

    return connect(mapStateToProps)(ComposedComponent)
}