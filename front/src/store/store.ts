import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: (state = {}) => state,
    // Add your reducers here
})

export default store;