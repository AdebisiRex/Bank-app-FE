import React from 'react'
import DashboardNav from '../DashboardNav'
import Navbar from '../Navbar'
import Useredit from '../Useredit'

const UsereditPage = () => {
  return (
    <>
    <Navbar/>
    <div className='row'>
    <DashboardNav/>
    <Useredit/>
    </div>
    </>
  )
}

export default UsereditPage