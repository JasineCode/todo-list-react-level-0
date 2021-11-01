import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LinkItem } from '../model/link-item'


const SideBarItem = ({ linkItem = new LinkItem() }) => {

    const [active,setActive] = useState(false)

    const handleActive = (match, location) => {
        if (match?.url === location.pathname) {
            setActive(true)
        }
    }

    return (

        <li className={active && "active"}>
            <NavLink isActive={handleActive} to={`/${linkItem.path}`} >

                <i className={`fa fa-${linkItem.icon}`} aria-hidden="true" />
                <span className="hidden-xs hidden-sm text-capitalize">
                    {linkItem.label}
                </span>

            </NavLink>
        </li>
    )
}

export default SideBarItem
