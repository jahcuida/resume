import { useState } from 'react'
import Header from './components/header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    </>
  )
}

export default App
