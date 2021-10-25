import React, { useEffect, useState } from 'react'
import MovieDetails from '../Components/MovieDetails'
import { ANIMES_DATA } from '../data/animes'
import { Anime } from '../models/anime'
import Footer from '../shared/Footer'
import Header from '../shared/Header'

const MoviePage = ({ match }) => {

    const [anime, setAnime] = useState(new Anime())

    // component did mount life cycle
    useEffect(() => {
        // retrieve the anime by id 
        let id = match.params.id
        setAnime({...ANIMES_DATA.find(a => a.id == id)})
    }, [])
    
    return (
        <>
            <Header hideFilter />
            <main className="p-3 m-3 d-flex align-items-center" style={{ height: '78vh' }}>
                <MovieDetails  details={anime} />
            </main>


            <Footer />
        </>
    )
}

export default MoviePage
