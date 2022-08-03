import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {initialStateType , params_type , fetchType} from '../../types/types'
import axios from "axios";

export const getMovies:any = createAsyncThunk(
'posts/getMovies',
async (params: params_type) => {
    const {page, sort_by , search_value } = params
    let api_key = '6071c7f776d0e35fb4f1d54ec4be7272'
    function api_handler(){
        if(search_value) {
            return `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search_value}&page=${page}`
        } else {
            return `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=${sort_by}&page=${page}`
        }
    }
    const {data} = await axios.get<fetchType>(api_handler())
    console.log(data)
    return data
})

const initialState: initialStateType = {
    movies: [],
    page: 1,
    sort_by: 'popularity.desc',
    loadNewMovies:false,
    search_value:'',
    total_pages:0,
    loading: true,

}

export const moviesSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changePage(state, action: PayloadAction<number>) {
            state.page = action.payload
        },

        changeSortBy(state, action:PayloadAction<string>) {
            state.page = 1
            state.sort_by = action.payload
            state.loadNewMovies = true
        },

        searchMovie(state,action:PayloadAction<string>) {
            state.search_value = action.payload
            state.page = 1
            state.loadNewMovies = true
        }
    },
    extraReducers: (builder) => {

        builder.addCase(getMovies.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getMovies.fulfilled, (state, action) => {
            if(!state.loadNewMovies) {
                state.movies = [...state.movies,...action.payload.results]
            }
            else {
                state.movies = action.payload.results
                state.loadNewMovies = false
            }
            console.log(action)
            state.total_pages = action.payload.total_pages
            state.loading = false
        })
        builder.addCase(getMovies.rejected, (state, action) => {
            state.loading = false
        })

    },
})

export const { changePage, changeSortBy , searchMovie } = moviesSlice.actions

export default moviesSlice.reducer