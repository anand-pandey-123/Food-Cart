import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className="mx-auto md:h-screen w-full">
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}

export default Home