import './App.css'
import { useState } from 'react'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'

function App() {
const [token, setToken] = useState(null)
  return (
    <>
    <h1>Welcome!</h1>
    <SignUpForm setToken={setToken}/>
    <Authenticate token={token}/>
    </>
  )
}

export default App
