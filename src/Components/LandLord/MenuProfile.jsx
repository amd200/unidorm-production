import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CiGrid41 } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiCircleAlert } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
function MenuProfile() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll('.dropdown-list .nav-item .nav-link');

    links.forEach(link => {
      if (link.classList.contains('active')) {
        setIsActive(true);
      }
    });
  }, []);
  // الزقة اللي بتحصل في الصفحة
  // ${isActive ? '' : 'mb-2'}
  return (
    <div className='menu-profile bg-white rounded bg-white border'>
    
      <ul className='list-unstyled' id='parentM'>
        <li className='nav-item mb-2'><NavLink to={"/landlord/dashboard"} className={"nav-link"}><CiGrid41 className='me-2 fs-4' />Dashboard</NavLink></li>
        <li className={`nav-item   bg-white  `}>
          <a aria-current="page" href={"#submenu"} data-bs-toggle="collapse" className={`nav-link`}><CiViewList className='me-2 fs-4' />All Listings</a>
          <ul className={`list-unstyled dropdown-list collapse ${isActive ? 'collapsed  show' : ''} `} id='submenu' data-bs-parent="#parentM">
            <li className='nav-item mb-2 bg-white'><NavLink to={"/landlord/addlisting"} className={"nav-link"}>Add Listing</NavLink></li>
          </ul>
        </li>

        <li className='nav-item mb-2 bg-white'><NavLink to={"/landlord/bookings"} className={"nav-link"}><CiViewList className='me-2 fs-4' />Bookings</NavLink></li>
        <li className='nav-item mb-2 bg-white'><NavLink to={"requestuser"} className={"nav-link"}><MdOutlineCompareArrows className='me-2 fs-4' />Requests</NavLink></li>
        <li className='nav-item mb-2 bg-white'><NavLink to={"wishlistuser"} className={"nav-link"}><CiHeart className='me-2 fs-4' />Payments</NavLink></li>
        <li className='nav-item mb-2 bg-white'><NavLink to={"/landlord/profile"} className={"nav-link"}><CiCircleAlert className='me-2 fs-4' />My profile </NavLink></li>
        <li className='nav-item mb-2 bg-white'><NavLink to={"/logout"} className={"nav-link"}><CiLogout className='me-2 fs-4' />Log-out</NavLink></li>
      </ul>

    </div>
  )
}

export default MenuProfile