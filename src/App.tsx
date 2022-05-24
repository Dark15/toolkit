import './App.css'

import styled from '@emotion/styled'
import { Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import menuList from './menu'
import { flattenMenu } from './utils/flattenMenu'

const AppWrapper = styled.div<{ open: boolean }>`
  padding-top: 64px;
  padding-left: ${(props) => (props.open ? '250px' : '0')};
  transition: padding-left 0.5s;
  display: flex;
  justify-content: center;
`
const AppContainer = styled.div`
  margin-top: 64px;
`

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const pages = flattenMenu(menuList)

  return (
    <div className="App">
      <BrowserRouter>
        <Header setOpen={setSidebarOpen} open={sidebarOpen} />
        <Sidebar open={sidebarOpen} />

        <AppWrapper open={sidebarOpen}>
          <AppContainer>
            <Suspense fallback={<div />}>
              <Routes>
                {pages.map((item) =>
                  item.view ? (
                    <Route path={item.path} element={item.view} key={item.path} />
                  ) : (
                    <Route path={item.path} element={item.view} key={item.path} />
                  )
                )}
              </Routes>
            </Suspense>
          </AppContainer>
        </AppWrapper>
      </BrowserRouter>
    </div>
  )
}

export default App
