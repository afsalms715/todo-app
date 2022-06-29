
import './App.css';
import {useState,useRef} from "react"

function App() {
  const[todo,setTodo]=useState('')
  const[todos,setTodos]=useState([])
  const todoInput=useRef()
  return (
    <div className="App">
      <h1 style={{color:'white'}}>TODO</h1>
      <input className='text-field form-control element-inline' onChange={(e)=>{
        setTodo(e.target.value)
      }} type="text" ref={todoInput}/>
      <button className="btn btn-primary element-inline" onClick={()=>{
        setTodos([...todos,{id:Date.now(),text:todo}])
        todoInput.current.focus();
      }}>Add</button>
      {
        todos.map((obj1)=>{
          return(
          <div className='todo-block'>
            <h4 style={{color:'white'}} className='element-inline'>{obj1.text}</h4>
            <button  className='element-inline btn btn-warning' onClick={()=>{
              setTodos(todos.filter((obj2)=>{
                if(obj1.id===obj2.id){
                 obj2=null
               }
               return obj2}))
               todoInput.current.focus();                
            }
          }
            >DONE</button>
          </div>
          )
        })
      }
    </div>
  );
}

export default App;
