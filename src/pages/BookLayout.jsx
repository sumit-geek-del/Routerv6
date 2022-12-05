import React from 'react'
import {Link, Outlet} from 'react-router-dom';

const BookLayout = () => {
  return (
    <>
        <Link to='/books/1'>
        Book 1
      </Link>
      <Link to="/books/2">
        Book 2
      </Link>
      <Link to="/books/new">
        New Book
      </Link>
      <Outlet/>
    </>
  )
}

export default BookLayout