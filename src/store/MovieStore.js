import { createSlice, configureStore } from '@reduxjs/toolkit'



const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies:[],
    totalPages: 0,
    activePage: 1,
  },
  reducers: {
    setMovies: (state, action) => {

      state.movies = action.payload

    },
    setTotalPages: (state, action) => {
      
      state.totalPages = action.payload
    },

    setActivePage: (state, action) => {
      state.activePage = action.payload
    }

  }
})

export const fetchMovies = (pageNo) => (dispatch) =>{
  fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`)
    .then((response) => {
      if(!response.ok){
        throw new Error("Network response was not ok")
      }
      return response.json()
    })
    .then((data) => {
      dispatch(setMovies(data.results))
      dispatch(setTotalPages(data.total_pages))
      dispatch(setActivePage(pageNo))
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });

}

export const { setMovies, setTotalPages,setActivePage } = movieSlice.actions

export default movieSlice.reducer