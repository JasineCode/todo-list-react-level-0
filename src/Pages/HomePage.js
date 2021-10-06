import React, { useState } from 'react'
import ListMovie from '../Components/ListMovie'
import { ANIMES_DATA } from '../data/animes'
import Footer from '../shared/Footer'
import Header from '../shared/Header'
import SignInModal from '../shared/SignInModal'

import "./../styles/home.css"

const HomePage = () => {
    const [Animes, setAnimes] = useState(ANIMES_DATA)
    return (
        <>
            {/* HEADER  */}
            <Header />
            <main className="d-flex flex-wrap mx-auto m-3 bg-light">
                {/* LIST MOVIES  */}
                <ListMovie animes={Animes}/>
            </main>
            <Footer />
            <SignInModal />
        </>
    )
}

export default HomePage
