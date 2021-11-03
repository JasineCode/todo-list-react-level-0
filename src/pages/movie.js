import React from 'react'
import MovieTable from '../components/MovieTable'
import ModalDeleteMovie from '../shared/ModalDeleteMovie'
import ModalEditMovie from '../shared/ModalEditMovie'
import Theme from '../theme/Theme'

const MoviePage = () => {
    return (
        <>
            <Theme>
                <MovieTable />
                <ModalEditMovie/>
                <ModalDeleteMovie/>
            </Theme>
        </>
    )
}

export default MoviePage
