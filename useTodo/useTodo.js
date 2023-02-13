import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodo = () => {

    const initialState = [];

    const init = () => { //Función que inicializa el initialState al ser renderizado nuestro componente la primera vez, esto solventa la problematica de que cuando se recarge el navegador los todos se pongan en [] y se pierda la información
        return JSON.parse(localStorage.getItem('todos')) ?? [];
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    //Almacenar Todos en el Localstorage del navegador web cada que cambie el arreglo de todos
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));


    }, [todos])



    const handleNewTodo = (todo) => { //Función disparda cada que se hace un submit en el formulario
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };

        dispatch(action); //Se envio el action a la función todoReducer
    }

    const handleDeleteTodo = (id) => { //Función que elimina un todo, se manda llamar al momento de dar click en el boton eliminar del todo pertinente
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        }

        );
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })

    }


    return {
        todos,
        todosCount: todos.length,
        todosPendingCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
