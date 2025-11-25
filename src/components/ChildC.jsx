import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
    const {theme, setTheme }= useContext(ThemeContext)
    const chnagetheme = ()=>{
        if(theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
  return (
    <div>
        <button onClick={chnagetheme}>chnage theme</button>
    </div>
  )
}

export default ChildC