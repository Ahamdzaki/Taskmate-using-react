import { useState } from "react"

export default function TimeandDate(){
    const [currentDateTime,setCurrentDateTime] = useState (new Date());
    
    
    function updateCurrentDateTime(){
        setCurrentDateTime(new Date())
    }
    setInterval(updateCurrentDateTime,1000);
    const currentTime = currentDateTime.toLocaleTimeString();
    
    
    return (
        <h1>{currentTime}</h1>
    )
}