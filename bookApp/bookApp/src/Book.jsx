import React from 'react'
// import PropTypes from 'prop-types'
import './Book.css'

function Book({isbn, title, author, price}) {
  return (
    <div id='book'>
        <h2>{title}</h2>
        <p>Author: {author}</p>
        <p>ISBN: {isbn}</p>
        <p>Price: {price}</p>
    </div>
  )
}

export default Book