import React from 'react'
import { NavLink } from 'react-router-dom'


const links = [
    ['/search' ,'🔍 All'],
    ['/image','📸 Images'],
    ['/video','📺 Videos'],
    ['/news','📰 News'],
]



const Links = () => {
    let active = "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2";
  return (
    <div className='flex sm:justify-around justify-between items-center mt-4'>
        {links.map((child) => {
            return(

            <NavLink to={child[0]} 
                className={ ({isActive}) =>  (isActive)? (active) : ("")}
            >
            {child[1]}
            </NavLink>
            )
        })}
    </div>
  )
}

export default Links
