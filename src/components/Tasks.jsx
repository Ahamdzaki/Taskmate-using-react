import { useState } from "react";
import "./Tasks.css";
import TaskList from "./TaskList";
import BtnReset from "./Resetbtn";
import TimeandDate from "./Time&Date";
import Form from "./form";
export default function Tasks({ tasks, setTasks }) {

    const [newTask, setNewtask] = useState("");
    const [progress, setProgress] = useState(false);

    function handleInput(event) {

        setNewtask(event.target.value);
    }

    function handleDelete(id) {

        setTasks(tasks.filter(taskfilter => taskfilter.id !== id));
    }

    function handleSubmit(event) {
        if (newTask === "") {
            alert("please fill the task");
        }
        else {
            const newtask = {
                id: Math.floor(Math.random() * 1000),
                name: newTask,
                progress: progress
            }
            setTasks([...tasks, newtask]);
            setNewtask("");
            setProgress(false);
        }
        event.preventDefault();
    }

    function handleProgress(event) {
        console.log(event.target.value);
        setProgress(!progress);
    }

    function handleReset(event) {
        setNewtask("");
        setProgress(false);
        event.preventDefault();
    }

    return (

        <div>
            <TimeandDate />
            <Form handleSubmit={handleSubmit} handleInput={handleInput} handleProgress={handleProgress} newTask={newTask} progress={progress} />
            {/* <BtnReset handleReset={handleReset}/> */}
            {tasks.map(task => (
                <section key={task.id}>
                    <ul className="lists">
                        <TaskList task={task} handleDelete={handleDelete} />
                    </ul>
                </section>

            ))}

        </div>
    )
}