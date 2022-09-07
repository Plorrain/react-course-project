import React from 'react';
import './Button.css'

const Button = ({ aging }) => {
return (
  <button onClick={aging}>
    Add 2 years
  </button>
)
}

export default Button
