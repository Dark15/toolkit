import './index.css'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

const App = lazy(() => import('./App'))
const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <Suspense fallback={<div>loading...</div>}>
    <StrictMode>
      <App />
    </StrictMode>
  </Suspense>
)
