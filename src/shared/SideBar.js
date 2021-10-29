import React from 'react'

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
                        {/* SIDEBAR ITEM */}
                        <li className="active">
                            <a href="#">
                                <i className="fa fa-home" aria-hidden="true" />
                                <span className="hidden-xs hidden-sm">Home</span>
                            </a>
                        </li>
                        {/* / SIDEBAR ITEM */}
                        <li>
                            <a href="#">
                                <i className="fa fa-calendar" aria-hidden="true" />
                                <span className="hidden-xs hidden-sm">Users</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-cog" aria-hidden="true" />
                                <span className="hidden-xs hidden-sm">Setting</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideBar
