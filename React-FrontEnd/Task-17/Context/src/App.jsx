import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CartProvider } from './CartContext'
import Detail from './Detail'
function App() {
  const [count, setCount] = useState(0)
   return (
    <>
    <CartProvider>
      <Detail></Detail>
    </CartProvider>
     </>
  )
}

export default App
