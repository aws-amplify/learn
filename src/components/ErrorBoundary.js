import {Component} from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {hasError: false}
  }

  static getDerivedStateFromError(error) {
    console.log(error)
    return {hasError: true}
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }

  render() {
    const {hasError} = this.state
    if (hasError) {
      return <h1>Something went wrong.</h1>
    }

    const {children} = this.props
    return children
  }
}
