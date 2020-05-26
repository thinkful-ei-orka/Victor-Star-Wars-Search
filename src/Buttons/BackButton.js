import React from 'react'
import './BackButton.css'

export default function BackButton(props) {
  const { tag, className, children, ...otherProps } = props

//react button element
  return React.createElement(
    props.tag,
    {
      className: [
        'BackButton', 
        props.className].join(' '),
      ...otherProps
    },
    props.children
  )
}

BackButton.defaultProps ={
  tag: 'a',
}