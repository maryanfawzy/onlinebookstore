import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo (3).png'

const Header = () => {
  return (
    

    <header>
    
    <nav className="border-b border-red dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to="/" class="flex items-center ">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
        </Link>
        <div className=" flex items-center ">
            <span className=' cursor-pointer text-xl text-red-700 dark:text-white mr-5  bi bi-gear-fill'></span>
            <span className='bi bi-search'></span>
            <span className='class="bi bi-cart'></span>
            <span className='bi bi-person-circle'></span>
            
        </div>
    </div>
</nav>


      </header>
    


  )
}

export default Header
