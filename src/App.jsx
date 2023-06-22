import React from "react";
import {useState} from "react"
import {uuid} from "react-uuid"

function App() {
  const todoBox = [
    {
      id: 1,
      title: "리엑트 공부하기",
      contents: "숙련주차 강의 듣기",
      isDone: false,
    },
    {
      id: 2,
      title: "리엑트 공부하기",
      contents: "숙련주차 강의 듣기",
      isDone: false,
    },
    {
      id: 3,
      title: "리엑트 공부하기",
      contents: "숙련주차 강의 듣기",
      isDone: false,
    },
  ];

  const [todos, setTodos] = useState(todoBox)
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')

  

  return (
    <>
      <div
        style={{
          backgroundColor: "yellow",
          padding: "10px",
        }}
      >
        <h3>Todo List</h3>        
      </div>

      <div
        style={{
          backgroundColor: "orange",
          padding: "10px",
        }}
      >
        <form onSubmit={function(event){
          const newTodos = {
            id: uuid(),
            title,
            contents,
            isDone: false,
          }
          setTodos([...todos, newTodos])
        }}>
        <input type="text" placeholder="제목" value={title} 
          onChange={function(event){
          setTitle(event.target.value)
        }} />
        <input type="text" placeholder="내용" value={contents} 
          onChange={function(event){
          setContents(event.target.value)
        }}/>
        <button>입력하기</button>
        </form>
      </div>

      <div
        style={{
          backgroundColor: "aqua",
          padding: "10px",
        }}
      >
        <h3>List Section</h3>
        {todos.map((todos)=>{
          return (
            <div style={{
            padding: "10px",
            border: "2px solid black",
            margin: "10px",
            width: "300px"
            }}
            key={todos.id}>
            <p>{todos.id}</p>
            <p>{todos.title}</p>
            <p>{todos.contents}</p>
            <p>{todos.isDone.toString()}</p>
            </div>
          )
        })}
                  
        
      </div>
    </>
  );
}

export default App;
