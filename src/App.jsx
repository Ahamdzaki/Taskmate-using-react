import "./App.css";
import Tasks from "./components/Tasks";
import { useState } from "react";

export default function(){

  const [tasks,setTasks] = useState([]);
  
  return (
    <div>
        <Tasks tasks ={tasks} setTasks ={setTasks} />   
    </div>
  )
}