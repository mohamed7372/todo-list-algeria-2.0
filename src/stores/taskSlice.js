import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        added: (state, action) => {
            action.payload;
        },
        toggled: (state) => {},
        removed: (state) => {},
    },
});

export default taskSlice.reducer;
export const taskActions = taskSlice.actions;
