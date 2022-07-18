import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IMovie} from '../../types/types'

interface initialStateType {
    movies:IMovie[],
}

const initialState:initialStateType = {
    movies: [],
}

export const moviesSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        updateMovie(state,action:PayloadAction<IMovie[]>) {
            state.movies = action.payload
        }
    },
})

export const { updateMovie } = moviesSlice.actions

export default moviesSlice.reducer