import React from 'react'
import {Routes, Route} from 'react-router-dom'
import BooksList from './BooksList'
import Books from './Books'
import NewsBook from './NewsBook'
import BookLayout from './BookLayout'

const BooksRoutes = () => {
  return (
    <>
      <BookLayout/>

    <Routes>

      <Route index element={<BooksList/>}/>
      <Route path=':id' element={<Books/>}/>
      <Route path='new' element={<NewsBook/>}/>
    </Routes>
    </>
  )
}

export default BooksRoutes