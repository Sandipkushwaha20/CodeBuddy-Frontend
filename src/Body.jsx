import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Body = () => {
  return (
    <div className=''>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Body
