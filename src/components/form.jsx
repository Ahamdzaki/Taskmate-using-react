
export default function Form({handleSubmit,handleInput,handleProgress,newTask,progress}){
    return(
        <form onSubmit={handleSubmit}>
                <label htmlFor="">Tasks: </label>
                <input onChange={handleInput} value={newTask} type="text"  placeholder="What is your plan" />

                    <select onChange={handleProgress} value={progress} className="selection">
                        <option value={false}>Pendding</option>
                        <option value={true}>Complete</option>
                    </select>
                <span>
                    <button onClick={handleSubmit} type="submit" className="btnAddTask">Add Task</button>
                </span>
        </form>
    )
}