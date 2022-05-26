import './App.css'

import styled from '@emotion/styled'
import { Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import type { MenuItem } from './menu'
import menuList from './menu'
import { flattenMenu } from './utils/flattenMenu'

const AppWrapper = styled.div<{ open: boolean }>`
  padding-top: 64px;
  padding-left: ${(props) => (props.open ? '250px' : '0')};
  transition: padding-left 0.5s;
  display: flex;
  justify-content: center;
`

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const pages: MenuItem[] = flattenMenu(menuList)

  return (
    <div className="App">
      <BrowserRouter>
        <Header setOpen={setSidebarOpen} open={sidebarOpen} />
        <Sidebar open={sidebarOpen} />

        <AppWrapper open={sidebarOpen}>
          <div
            id="app-container"
            className="mt-[64px] max-w-[1280px] lg:w-[86%] md:w-[88%] sm:w-[90%]"
          >
            <Suspense fallback={<div />}>
              <Routes>
                {pages.map((item) => (
                  <Route
                    path={item.path}
                    key={item.path}
                    element={
                      <>
                        <h1 className="text-35px mb-[16px] leading-[1.35]">
                          {item.label}
                          <span className="ml-3 font-light text-24px">{item.description}</span>
                        </h1>
                        <div className="w-[75%]">{item.view}</div>
                      </>
                    }
                  ></Route>
                ))}
              </Routes>
            </Suspense>
          </div>
        </AppWrapper>
      </BrowserRouter>
    </div>
  )
}

export default App
