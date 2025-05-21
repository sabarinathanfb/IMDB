import { createSlice, configureStore } from '@reduxjs/toolkit'

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: {},
  reducers: {
    addToWatchlist: (state, action) => {
      state[action.payload.id] = action.payload

      // state = newState dont do this 
      // state.xyz = newXyz
    },
    removeFromWatchlist: (state, action) => {
      delete state[action.payload.id]
    },

  }
})

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions

export default watchlistSlice.reducer