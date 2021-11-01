import React from 'react'
import { LINK_ITEMS_DATA } from '../data/link-items'
import SideBarItem from './SideBarItem'

const SideBar = () => {
    return (
        <>
            <div style={{ height: "100vh" }} className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                <div className="logo">
                    <a hef="home.html">
                        <img src="https://cdn.vanguardngr.com/wp-content/uploads/2013/12/movies.gif" alt="merkery_logo" className="logo" />
                    </a>
                </div>
                <div className="navi">
                    <ul>
                        {
                            LINK_ITEMS_DATA.
                                map(li =>
                                    <SideBarItem
                                        key={li.id}
                                        linkItem={li}
                                    />)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideBar
