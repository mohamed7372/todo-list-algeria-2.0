import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../hooks/useLocalStorage";

// use hooks local storage
const [name, setName] = useLocalStorage("name", () => "");
// const [name, setName] = useLocalStorage("name", "");

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
