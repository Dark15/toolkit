import './App.css'

import styled from '@emotion/styled'

const Text = () => {
  return (
    <h1
      css={{
        color: 'red'
      }}
    >
      Hello World
    </h1>
  )
}

const Div = styled.div`
  color: red;
`

const App = () => {
  return <Text />
}

export default App
