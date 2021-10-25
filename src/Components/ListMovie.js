import React from 'react'
import { Anime } from '../models/anime'
import Movie from './Movie'

const ListMovie = ({animes = []}) => {
    return (
        animes.map(a => <Movie key={a.id} anime={a} />)
    )
}

export default ListMovie
