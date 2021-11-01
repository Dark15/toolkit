import './index.css'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import 'antd/dist/antd.css'

import { lazy, StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom'

const App = lazy(() => import('./App'))

ReactDOM.render(
  <Suspense fallback={<div>loading...</div>}>
    <StrictMode>
      <App />
    </StrictMode>
  </Suspense>,
  document.getElementById('root')
)
