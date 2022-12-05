import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes, Route, Link, useRoutes} from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import NewsBook from './pages/NewsBook'
import NotFound from './pages/NotFound'
import BookLayout from './pages/BookLayout'
import BooksRoutes from './pages/BooksRoutes'
import './App.css'
import BooksList from './pages/BooksList'

function App() {
  // let element = useRoutes([
  //   {
  //     path:'/',
  //     element:<Home/>,
  //   },
  //   {
  //     path:'books',
  //     element:<BooksList/>
  //   }
  // ])

  return (
   <>
   <nav>
    <ul>
      <li>
        <Link to="/">
            Home
        </Link>
        </li>
        <li>

        <Link to="books">
            BooksList
        </Link>
      </li>
    </ul>
   </nav>
   {/* {element} */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/books/*' element={<BooksRoutes/>}/>
      <Route path='*' element={<NotFound/>}/>


    </Routes>
   </>
  )
}

export default App
