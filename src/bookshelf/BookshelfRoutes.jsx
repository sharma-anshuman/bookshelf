import React from 'react'
import Bookshelf from './pages/Bookshelf'
import SearchBooks from './pages/SearchBooks'
import { Route, Routes } from 'react-router'

const BookshelfRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Bookshelf />}/>
        <Route path='/search' element={<SearchBooks />}/>
      </Routes>
    </React.Fragment>
  )
}

export default BookshelfRoutes