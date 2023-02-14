import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addList,editList,deleteList,deleteAll, fetchList } from './Redux/actions';
import "./styless.css"

function Todo() {
  let editText = useSelector((state) => state.editText)
  let editFlag = useSelector((state) => state.editFlag)
  let editID = useSelector((state) => state.editID)
  let [inputText, setInputText] = useState('');
  let listTodo = useSelector((state) => state.listTodo )
  const dispatch = useDispatch();
  const url = 'https://jsonplaceholder.typicode.com/todos';

  useEffect(() =>{
    dispatch(fetchList(url));   
  },[])

  useEffect(() => {
    if(editFlag){
      setInputText(editText)
      editFlag = false;
    }
  }, [editFlag,editText])
  
  const handleEnterPress = (e) => {
    if (e.key == 'Enter' && e.target.value !== '') {
      dispatch(addList(inputText,editID))
      setInputText("")
    }
  }
 
  return (
    <div className="main-container">
      <div className="center-container">
      <h1 className="app-heading">Make Your Todo List</h1>
        
        <div className="input-container">
          <input type="text" className="input-box-todo" placeholder= "Enter your todo"
            value={inputText}
            onChange={e => {
              setInputText(e.target.value)
            }}
            onKeyDown={handleEnterPress}
          />
          <button className="add-btn"
            onClick={() => {
              inputText !== ''  && dispatch(addList(inputText,editID))
              setInputText("")
            }}>+</button>
        </div>

        {listTodo.length > 0 && <h3 className="app-heading">Pending List</h3> }
        
        {listTodo.map((listItem) => {
          return (
              <li className="list-item">
                {listItem.title}
                <button  className='del-btn'
                onClick={()=>{dispatch(deleteList(listItem.id))
                }}>Delete</button>
                <button  className='edit-btn'
                onClick={()=>{dispatch(editList(listItem))
                }}>Edit</button>
              </li>
          )
        })}
        <div className='deleteAll'>
        {listTodo.length > 0 && <button onClick={() => dispatch(deleteAll())}>Delete all</button> }
        </div>
      </div>
    </div>
  )
}


export default Todo