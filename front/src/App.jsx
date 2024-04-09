import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Reg from './components/Reg'
import PageOne from './components/PageOne'
import ContextApi from './ContextApi'
import Verification from './components/Verification'

function App() {

  const [img, setImg] = useState("");
  const [data, setData] = useState({
    image: "",
    location: "",
    desc: []
  });

  const [page, setPage] = useState(1)

  return (
    <Router>
      <ContextApi.Provider value={{ page, setPage, data, setData, img, setImg }}>
        <Routes>
          <Route path='/' element={<Reg />}></Route>
          <Route path='/pageOne' element={<PageOne />}></Route>
          <Route path='/verification' element={<Verification />}></Route>
        </Routes>
      </ContextApi.Provider>
    </Router>
  )
}

export default App
