import { useEffect, useState } from 'react'
import { MovieList } from '../component/MovieList'
import { Pagination } from '../component/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { setActivePage, setMovies,setTotalPages, fetchMovies } from '../store/MovieStore'


export const MoviesList = () => {

    const totalPages = useSelector((state) => state.movieList.totalPages)
    const dispatch = useDispatch()





    const handlePageChange = (pageNo) => {
        dispatch(fetchMovies(pageNo))
        
    }

    useEffect(() => {
        dispatch(fetchMovies(1))
    },[])

    return(
        <div className='movies-list-page'>
            <h1>Movie List</h1>
            <MovieList />
            <div className='pagination-section'>
                <Pagination onPageChange={handlePageChange} totalPages={totalPages}/>
            </div>
        </div>
    )
}