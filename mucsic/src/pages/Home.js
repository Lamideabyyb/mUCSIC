import React from 'react'
import {Link as RouterLink} from 'react-router-dom';

function Home() {
  return (
    <>
     <RouterLink to='/'>Go to home</RouterLink>
     <h2>Get Kali</h2>
    </>
  )
}

export default Home