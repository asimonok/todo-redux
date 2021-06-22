import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, toggleTodo} from "../../../../redux/actions";

const Todo = ({ id }) => {
    const dispatch = useDispatch();
    const item = useSelector((state) => state.todoReducer.todoEntities[id]);

    const onDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    }

    const onToggleTodo = (id) => {
        dispatch(toggleTodo(id))
    }
    return (
        <div className='todo-item-container' key={item.id}>
            <li className={item.completed ? 'todo-item completed' : 'todo-item'}>{item.text}</li>
            <button className='button button-toggle' onClick={() => onToggleTodo(item.id)}>Done Todo</button>
            <button className='button button-delete' onClick={() => onDeleteTodo(item.id)}>Delete Todo</button>
        </div>

    )
}

export default Todo;