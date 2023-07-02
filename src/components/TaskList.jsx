
export default function TaskList({task,handleDelete}){
    
    return(
            <li className="list_item" >   {task.id}   {task.name}
                            <span>
                                <button  className="btnEdit">EDIT</button>
                                <button onClick={()=>handleDelete(task.id)} className="btnDelete">DELETE</button>    
                            </span>
                            <div style={{color:task.progress ? "white": "red"}}>
                                {task.progress ? "Complete" : "Pending..."}
                            </div>                
            </li>    
    )
}