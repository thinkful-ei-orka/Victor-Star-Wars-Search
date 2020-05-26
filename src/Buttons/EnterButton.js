import React from 'react'
import './EnterButton.css'

export default function EnterButton(props) {
  const { tag, className, children, ...otherProps } = props

//react button element
  return React.createElement(
    props.tag,
    {
      className: [
        'EnterButton', 
        props.className].join(' '),
      ...otherProps
    },
    props.children
  )
}

EnterButton.defaultProps ={
  tag: 'a',
}