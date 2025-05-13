import React from 'react'
import MainRouters from './pages'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <>
      <MainRouters/>
      <Toaster
        reverseOrder={false}
      />
    </>
  )
}

export default App