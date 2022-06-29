
import './App.css';
import {useState,useRef} from "react"

function App() {
  const[todo,setTodo]=useState('')
  const[todos,setTodos]=useState([])
  const todoInput=useRef()
  return (
    <div className="App">
      <h1>TODO</h1>
      <input onChange={(e)=>{
        setTodo(e.target.value)
      }} type="text" ref={todoInput}/>
      <button onClick={()=>{
        setTodos([...todos,{id:Date.now(),text:todo}])
        todoInput.current.focus();
      }}>Add</button>
      {
        todos.map((obj1)=>{
          return(
          <diV>
            <h4 className='element-inline'>{obj1.text}</h4>
            <button className='element-inline' onClick={()=>{
              setTodos(todos.filter((obj2)=>{
                if(obj1.id===obj2.id){
                 obj2=null
               }
               return obj2}))
               todoInput.current.focus();                
            }
          }
            >delete</button>
          </diV>
          )
        })
      }
    </div>
  );
}

export default App;
