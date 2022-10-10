import React from 'react'
import { NavLink } from 'react-router-dom'
import { WEB_URL } from '../../common/constants'
import './style.scss'

const LIST_NAV_LINKS = [
  {
    url: WEB_URL.HOME,
    title: "Home"
  },
  {
    url: WEB_URL.TODOS_LIST,
    title: "Todo",
  },
]

const Header = () => {
  return (
    <div className='header'>
      <div className='header__nav-links'>
        {LIST_NAV_LINKS?.map((item) => {
          return (
            <NavLink
              key={item?.url}
              to={item?.url}
              className={({ isActive }) =>
                isActive ? 'header__nav-links--active-item' : 'header__nav-links--item'
              }
            >
              {item?.title}
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default Header