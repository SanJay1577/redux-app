import React from 'react'
import { useSelector } from 'react-redux'

function NavBar() {
  // const {state, dispatch} = useContext(contextname)
  const {name} = useSelector(state=>state.userInfo.data)
  return (
    <div className='nav-container'>
        <h3>{name}</h3>
        <button>logout</button>
    </div>
  )
}

export default NavBar