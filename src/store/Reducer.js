import { createSlice, current } from "@reduxjs/toolkit"
//ค่าเริ่มต้น app
const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: "movieListing",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.movies = action.payload
            //check
            // console.log(current(state))
        }
    }
})
//addMoive เปน action ในการเพิ่มข้อมูล
export const { addMovie } = movieSlice.actions
export default movieSlice.reducer