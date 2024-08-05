import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo !== action.payload);
        }
    },
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
