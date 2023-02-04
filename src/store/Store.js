import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./Reducer";
//configureStore ใช้แค่ครั้งเดียว ในการตั้งค่า redux 
export default configureStore({
    reducer: {
        movies: movieSlice
    }
})

//เสร็จแล้ว เหลือแค่ ส่ง api 