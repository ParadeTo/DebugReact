import * as React from 'react'
import { useEffect, useState, createRef } from 'react'
import { render } from 'react-dom'


function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
}

function serializer(replacer, cycleReplacer) {
  var stack = [],
    keys = []

  if (cycleReplacer == null)
    cycleReplacer = function(key, value) {
      if (stack[0] === value) return '[Circular ~]'
      return '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']'
    }

  return function(key, value) {
    var fnBody
    if (value instanceof Function || typeof value == 'function') {
      fnBody = value.toString()

      if (fnBody.length < 8 || fnBody.substring(0, 8) !== 'function') {
        //this is ES6 Arrow Function
        return '_NuFrRa_' + fnBody
      }
      return fnBody
    }
    if (value instanceof RegExp) {
      return '_PxEgEr_' + value
    }

    if (stack.length > 0) {
      var thisPos = stack.indexOf(this)
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
    } else stack.push(value)

    return replacer == null ? value : replacer.call(this, key, value)
  }
}

class App extends React.Component {
  state = {
    count: 0
  }

  componentDidMount() {
    let times = 0
    const id = setInterval(() => {
      if (times++>10) {
        clearInterval(id)
        return
      }
      this.setState({count: this.state.count+1})
    }, 1000)
  }

  render() {
    return (
      <div>
        <span>ddd</span>
        {[...new Array(this.state.count)].map((_, index) => {
          return <span key={index}>{index}</span>
        })}
      </div>
    )
  }

}

function exceedThreshold(reactElements, flattedReactElements = [], threshold = 1) {
  console.log(flattedReactElements)
  if (!reactElements) return false
  if (!Array.isArray(reactElements)) {
    flattedReactElements.push(reactElements)
    return exceedThreshold(
      reactElements.props && reactElements.props.children,
      flattedReactElements
    )
  } else {
    for (const element of reactElements) {
      if (exceedThreshold(element, flattedReactElements)) break
    }
  }
  if (flattedReactElements.length > threshold) return true

  return false
}


const withUpdateNofity = (C) => {
  class Comp extends C {
    componentDidMount() {
      if (super.componentDidMount) super.componentDidMount()
      // 每隔一段时间看看现在有多少元素了，如果元素够多，就可以上报了
      let times = 0
      const id = setInterval(() => {
        if (times++ > 5) {
          clearInterval(id)
          return
        }
        const reactELements = super.render ? super.render() : null
        if (reactELements) {
          if (exceedThreshold(reactELements)) {
            console.log('component loaded')
            clearInterval(id)
          }
        } else {
        }
      }, 1000)
    }

    render() {
      return super.render()
    }
  }
  return Comp
}

export default withUpdateNofity(App)