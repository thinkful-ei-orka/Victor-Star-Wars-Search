import React from 'react'
import './CancelButton.css'

export default function CancelButton(props) {
  const { tag, className, children, ...otherProps } = props

//react button element
  return React.createElement(
    props.tag,
    {
      className: [
        'CancelButton', 
        props.className].join(' '),
      ...otherProps
    },
    props.children
  )
}

CancelButton.defaultProps ={
  tag: 'a',
}