import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Grocery} from "./Components/Grocery"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
     <Grocery/>
    </div>
  )
}

export default App
