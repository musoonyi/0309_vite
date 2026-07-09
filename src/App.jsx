import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ClassPage from './pages/ClassPage'
import Todo from './pages/Todo'
import "./App.css"
import Header from './components/Header'


const App = () => {
  return (
    <div className='wrap'>
      <Header />

      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/class' element={<ClassPage />} />
          <Route path='/todo'  element={<Todo />} />
        </Routes>
      </main>      
    </div>
  )
}

export default App

