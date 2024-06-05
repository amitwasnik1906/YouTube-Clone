import React from 'react'
import "./_header.scss"
import { FaBars } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from "react-icons/md"

function Header({ handleToggleSidebar }) {
  return (
    <div className='header'>
      <div className='header__menu'>
        <FaBars
          className="faBars"
          size={26}
          onClick={() => handleToggleSidebar()}
        />

        <img src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png" alt="Logo" className="header__logo" />
      </div>

      <form>
        <input type="text" placeholder='Search' />
        <button>
          <AiOutlineSearch
            size={26}
          />
        </button>
      </form>

      <div className='header__icon'>
        <MdNotifications
          size={26}
        />
        <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="avatar" />
      </div>

    </div>
  )
}

export default Header
