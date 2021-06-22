import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, changeFilter } from '../../redux/actions'
import './Todos.css'
import Todo from './components/Todo';
import { List } from 'react-virtualized';

const Todos = () => {
    const [todoText, setTodoText] = useState('');

    const todos = useSelector((state) => state.todoReducer.todos) || [];
    
    const dispatch = useDispatch();

    const handleText = (e) => {
        setTodoText(e.target.value);
    }

    const onAddTodo = () => {
        dispatch(addTodo(todoText));
        setTodoText('')
    }

    return (
        <div className='todos-container'>
            <h2 className='heading'>Todos</h2>
            <div className='filter-container'>Show:
                <button className='button button-all' onClick={() => dispatch(changeFilter('all'))}>All</button>
                <button className='button button-active' onClick={() => dispatch(changeFilter('active'))}>Active</button>
                <button className='button button-completed' onClick={() => dispatch(changeFilter('completed'))}>Completed</button>
            </div>
            <div className='add-todo-container'>
            <input className='add-todo-input' type='text' value={todoText} placeholder='Add new todo' onChange={(e) => handleText(e)}/>
            <button className='button button-add-todo' onClick={onAddTodo} disabled={todoText.trim() ? false : true}>Add todo</button>
            </div>
            <ul className='todos'>
                <List
                    rowRenderer={({ index, style }) => (
                        <div key={index} style={style}>
                            <Todo id={todos[index]} />
                        </div>
                    )}
                    width={1000}
                    height={500}
                    rowHeight={30}
                    rowCount={todos.length}
                    overscanRowCount={2}
                />
            </ul>
        </div>
    )
}

export default Todos