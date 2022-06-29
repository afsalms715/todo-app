
import './App.css';
import {useState} from "react"

function App() {
  const[todo,setTodo]=useState('')
  const[todos,setTodos]=useState([])
  return (
    <div className="App">
      <h1>TODO</h1>
      <input onChange={(e)=>{
        setTodo(e.target.value)
      }} type="text"/>
      <button onClick={()=>{
        setTodos([...todos,{id:Date.now(),text:todo}])
      }}>Add</button>
      {
        todos.map((obj1)=>{
          return(
          <diV>
            <h4>{obj1.text}</h4>
            <button onClick={()=>{
              setTodos(todos.filter((obj2)=>{
                if(obj1.id===obj2.id){
                 obj2=null
               }
               return obj2}))                
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
