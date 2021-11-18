import './App.css'

import { useState } from 'react'

import Header from './components/Header'
import Sidebar from './components/Sidebar'

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  return (
    <div className="App">
      <Header setOpen={setSidebarOpen} open={sidebarOpen} />
      <Sidebar open={sidebarOpen} />
    </div>
  )
}

export default App
