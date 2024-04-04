import React from 'react'
import css from './style.module.css'

const App = () => {
  return (
    <div>
      <h1 style={{ color: "red", fontSize: "50px" }}>This is Home Page !!</h1>
      <p className={css.paracolor}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, consequuntur!</p>
      <h2 className='text-purple-800 text-3xl'>Tailwind css</h2>
    </div>
  )
}

export default App