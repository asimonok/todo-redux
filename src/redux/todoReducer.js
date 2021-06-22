const initialState = {
  todoEntities: {},
  todos: [],
};

for(let i = 0; i < 1000; i++) {
  const todo = {
    id: i,
    text: `TODO #${i + 1}`,
    completed: false,
  };
  initialState.todos.push(todo.id);
  initialState.todoEntities[todo.id] = todo;
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo = {
        id: new Date().valueOf().toString(),
        text: action.payload,
        completed: false,
      };
      return {
        ...state,
        todos: [newTodo.id].concat(state.todos),
        todoEntities: {
          ...state.todoEntities,
          [newTodo.id]: newTodo,
        }
      };
    }
    case 'TOGGLE_TODO': {
      const entity = state.todoEntities[action.payload];
      return {
        ...state,
        todoEntities: {
          ...state.todoEntities,
          [action.payload]: {
            ...entity,
            completed: !entity.completed,
          }
        },
      };
    }
    case 'DELETE_TODO': {
      return {
        ...state,
        todos: state.todos.filter((id) => id !== action.payload),
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
