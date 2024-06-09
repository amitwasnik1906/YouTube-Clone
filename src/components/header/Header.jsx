import React, { useState } from 'react'
import "./_header.scss"
import { FaBars } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from "react-icons/md"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header({ handleToggleSidebar }) {
  const [input, setInput] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${input}`)
  }

  const user = useSelector(state => state.auth?.user)

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

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
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
        <img src={user?.photoURL} alt="avatar" />
      </div>

    </div>
  )
}

export default Header
