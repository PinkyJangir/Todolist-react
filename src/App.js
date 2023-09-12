import React, { useEffect, useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [listTodo, setListTodo] = useState([])
  // const [edit,setTdit] = useState([])
  let addList = (inputText) => {
    if (inputText){
    localStorage.setItem('inputText', JSON.stringify([...listTodo, inputText]))
      setListTodo([...listTodo, inputText]);

  }}
  
  const deleteListitem = (key) => {
    let newListTodo = ([...listTodo]);
    newListTodo.splice(key, 1)
    localStorage.setItem('inputText', JSON.stringify([...newListTodo]))

    setListTodo([...newListTodo])
  }

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('inputText'));
    if (storedItems) {
      setListTodo(storedItems);
    }
  }, [listTodo]);

 const editTodoList=(index,newTodo)=>{
  if (newTodo){
    listTodo[index]=newTodo
    setListTodo([...listTodo])
    localStorage.setItem('inputText', JSON.stringify([...listTodo]))
  }
}


  return (
    <>
      <div className='main-container'>
        <div className='center-container'>
        <h1 className='app-heading'>TODO</h1>

          <TodoInput addList={addList} />
          {/* <hr /><hr /><hr /><hr /> */}
          <br/>


          {listTodo.map((listItem, index) => {
            return (
              <TodoList key={index} index={index} item={listItem} deleteItem={deleteListitem} editTodoList={editTodoList}/>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App