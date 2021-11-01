import React from 'react'
import MovieTable from '../components/MovieTable'
import ModalAddMovie from '../shared/ModalAddMovie'
import ModalDeleteMovie from '../shared/ModalDeleteMovie'
import ModalEditMovie from '../shared/ModalEditMovie'
import Theme from '../theme/Theme'

const MoviePage = () => {
    return (
        <>
            <Theme>
                <MovieTable />
                <ModalAddMovie/>
                <ModalEditMovie/>
                <ModalDeleteMovie/>
            </Theme>
        </>
    )
}

export default MoviePage
