import React from 'react'

const Header = ({ hideFilter = false }) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse px-5" id="navbarTogglerDemo01">
                        <a className="navbar-brand text-warning" href="#">Anime-Site</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                        </ul>
                        <form className={true ? "d-none" : "d-flex w-50"} >
                            <div className="input-group me-2 w-75">
                                <input type="text" className="form-control" placeholder="Filter Movie By Title" />
                                <span className="input-group-text"><i className="fas fa-search" /></span>
                            </div>
                        </form>
                        <button className="btn btn-warning text-uppercase"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            Sign In
                            <i className="fa fa-sign-in-alt" />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
