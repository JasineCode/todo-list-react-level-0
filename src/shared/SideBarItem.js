import React from 'react'
import { Link } from 'react-router-dom'
import { LinkItem } from '../model/link-item'


const SideBarItem = ({ isActive, linkItem = new LinkItem() }) => {
    return (
        <li className={isActive && "active"}>
            <Link to={`/${linkItem.path}`}>

                <i className={`fa fa-${linkItem.icon}`} aria-hidden="true" />
                <span className="hidden-xs hidden-sm text-capitalize">{linkItem.label}</span>

            </Link>
        </li>
    )
}

export default SideBarItem
