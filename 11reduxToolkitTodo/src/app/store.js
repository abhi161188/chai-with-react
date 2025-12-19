import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
import {useSelector, useDispatch} from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})