import React from 'react'
import Footer from '../shared/Footer'
import Header from '../shared/Header'
import SignInModal from '../shared/SignInModal'

import "./../styles/home.css"

const HomePage = () => {
    return (
        <>
            {/* HEADER  */}
            <Header/>
            <main className="d-flex flex-wrap mx-auto m-3 bg-light">
                <div className="card" style={{ width: '17rem' }}>
                    <div className="card-head">
                        <img src="https://static.fnac-static.com/multimedia/Images/FD/Comete/125062/CCP_IMG_ORIGINAL/1631283.jpg" className="card-img-top" alt="saytama" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Movie Title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" className="btn btn-warning">Wach Now <i className="fas fa-eye" /></a>
                    </div>
                </div>
                <div className="card" style={{ width: '17rem' }}>
                    <div className="card-head">
                        <img src="https://cfm.yidio.com/images/tv/67100/poster-180x270.jpg" className="card-img-top" alt="saytama" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Movie Title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" className="btn btn-warning">Wach Now <i className="fas fa-eye" /></a>
                    </div>
                </div>
                <div className="card" style={{ width: '17rem' }}>
                    <div className="card-head">
                        <img src="https://cfm.yidio.com/images/tv/44597/poster-180x270.jpg" className="card-img-top" alt="saytama" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Movie Title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" className="btn btn-warning">Wach Now <i className="fas fa-eye" /></a>
                    </div>
                </div>
                <div className="card" style={{ width: '17rem' }}>
                    <div className="card-head">
                        <img src="https://cfm.yidio.com/images/tv/761/poster-180x270.jpg" className="card-img-top" alt="saytama" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Movie Title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" className="btn btn-warning">Wach Now <i className="fas fa-eye" /></a>
                    </div>
                </div>
                <div className="card" style={{ width: '17rem' }}>
                    <div className="card-head">
                        <img src="https://cfm.yidio.com/images/tv/5674/poster-180x270.jpg" className="card-img-top" alt="saytama" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Movie Title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" className="btn btn-warning">Wach Now</a>
                    </div>
                </div>
                <div className="card" style={{ width: '17rem' }}>
                    <div className="card-head">
                        <img src="https://cfm.yidio.com/images/tv/24212/poster-180x270.jpg" className="card-img-top" alt="saytama" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Movie Title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" className="btn btn-warning">Wach Now <i className="fas fa-eye" /></a>
                    </div>
                </div>
                <div className="card" style={{ width: '17rem' }}>
                    <div className="card-head">
                        <img src="https://cfm.yidio.com/images/tv/4086/poster-180x270.jpg" className="card-img-top" alt="saytama" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Movie Title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" className="btn btn-warning">Wach Now <i className="fas fa-eye" /></a>
                    </div>
                </div>
                <div className="card" style={{ width: '17rem' }}>
                    <div className="card-head">
                        <img src="https://cfm.yidio.com/images/tv/743/poster-180x270.jpg" className="card-img-top" alt="saytama" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Movie Title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" className="btn btn-warning">Wach Now <i className="fas fa-eye" /></a>
                    </div>
                </div>
            </main>
            <Footer/>
            <SignInModal/>
        </>
    )
}

export default HomePage
