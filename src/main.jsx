import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from '../src/pages/Homepage.jsx'
import User from '../src/pages/User.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Error from '../src/pages/Error.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/user/:id' element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
