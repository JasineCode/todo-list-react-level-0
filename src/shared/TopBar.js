import React from 'react'

const TopBar = () => {
    return (
        <>
            <header>
                <div className="col-md-7">
                    <nav className="navbar-default pull-left">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="offcanvas" data-target="#side-menu" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                        </div>
                    </nav>
                    <div className="search hidden-xs hidden-sm">
                        <input type="text" placeholder="Filter movies by title " id="search" />
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="header-rightside">
                        <ul className="list-inline header-top pull-right">
                            <a href="#"><i className="fa fa-envelope" aria-hidden="true" /></a>
                            <li>
                                <a href="#" className="icon-info">
                                    <i className="fa fa-bell" aria-hidden="true" />
                                    <span className="label label-primary">3</span>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><img src="https://www.pinclipart.com/picdir/big/133-1331433_free-user-avatar-icons-happy-flat-design-png.png" alt="user" />
                                    <b className="caret" /></a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <div className="navbar-content">
                                            <span>JS Krishna</span>
                                            <p className="text-muted small">
                                                me@jskrishna.com
                                            </p>
                                            <div className="divider">
                                            </div>
                                            <a href="#" className="view btn-sm active">View Profile</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default TopBar
