import { configureStore } from "@reduxjs/toolkit";
// import reduxLogger from "redux-logger";
import taskReducer from "./taskSlice";

// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        task: taskReducer,
    },
    extraReducers: (builder) => {
        // builder.addCase(cakeActions.ordered, (state) => {
        //     state.numOfCake--;
        // });
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
