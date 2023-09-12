import React, { useEffect, useState } from 'react'
import myImage from '../img/myImage.png';
function TodoInput(props) {
  const [inputText, setInputText] = useState('')
  

  return (
    <>
    <div><img className='style-img' src={myImage} alt="My Image" />
      <div className='input-container'>
        <input
          type='text'
          className='input-box-todo'
          placeholder='Enter your todo...' value={inputText}
          onChange={e => {
            setInputText(e.target.value)
          }}
        />
        <button className='add-btn'
          onClick={() => {
            props.addList(inputText)
            setInputText('')
          }}
        >+</button>

      </div>
      </div>

    </>
  )
}

export default TodoInput