import * as React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hasError: false}
  }

  static getDerivedStateFromError() {
    return {hasError: true}
  }

  componentDidCatch(error, errorInfo) {
    debugger
  }

  render() {
    if (this.state.hasError) {
      return <span>error</span>
    }
    return this.props.children
  }
}

class A extends React.Component {
  render() {
    throw new Error('333')
    return <span>x</span>
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <A />
        </ErrorBoundary>
      </div>
    )
  }
}
