import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
    value: number
}

const initialState = {
    movies: [],
}

export const moviesSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        updateMovie: (state,action) => {
            state.movies = action.payload
        }
    },
})

export const { updateMovie } = moviesSlice.actions

export default moviesSlice.reducer