import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions/index'
import './Todo.css';

export default function Todo() {
    const [inputData, setInputData] = useState(5);
    const list = useSelector((state) => state.todoReducers.list)  // like event.target.value
    const dispatch = useDispatch();
    return (
        <div className="mainContener">
            <h1 className="heading">Welcome to ToDo </h1>
            <h4 className="heading">creacted in React-Redux</h4>
            <h3 className="heading">here is the Todo kjbfhsjf list</h3>
            <div className="inputContener">
                <input name="input_data" placeholder="add your data here"
                    value={inputData}
                    onChange={(event) => setInputData(event.target.value)} />
                <button className="addButton"
                    onClick={() => dispatch(addTodo(inputData), setInputData(''))}>ADD</button>
            </div>

            <div className="showList">
                {
                    list.map((item) => {
                        return (
                            <div key={item.id}>
                                <h4 className="itemList">{item.data} </h4>
                                <button className="deleteList"
                                    onClick={() => dispatch(deleteTodo(item.id))}> Delete</button>
                            </div>
                        )
                    })
                }
            </div>

            <div className="removeAll">
                <button
                onClick={()=> dispatch(removeTodo())}>Remove All</button>
            </div>
        </div>
    )
}
