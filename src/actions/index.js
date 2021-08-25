export const addTodo = (data) => {
    return {
        type : "ADD_TODO",
        payload : {
            id : new Date().getTime().toString(),
            data : data
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type : "DELETE_TODO",
        id                     // also we can write like this way instade of the 
    }
}

export const removeTodo = () => {
    return {
        type : "REMOVE_TODO"
    }
}