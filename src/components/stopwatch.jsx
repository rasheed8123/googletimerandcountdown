import { useEffect,  useState } from "react"

import  "./Timer.module.css"

export const StopWatch = () => {

    const [time,setTime]=useState(0);
    const [timerOn,setTimeOn]=useState(false);

    
    useEffect(()=>{
        if(timerOn)
        {
            var timer=setInterval(()=>{
                 setTime((prev)=>prev+10)
             },10)
        }
        return ()=>{
            
            clearInterval(timer)
        }
    },[timerOn])

    const handleStart=()=>{
        setTimeOn(true);
    }
    
    const handleReset=()=>{
        setTime(0);
        setTimeOn()
    }
    
    const handleStop=()=>{
        setTimeOn(false)
    }

    return(
        <div >
             <h1>Stopwatch</h1>
            <div >
                <span>{("0"+ Math.floor((time/600000)%60)).slice(-2)} h :</span>
                <span>{("0"+ Math.floor((time/60000)%60)).slice(-2)} m :</span>
                <span>{("0"+ Math.floor((time/1000)%60)).slice(-2)} s :</span>
                <span>{("0"+ ((time/10)%100)).slice(-2)} ms</span>
            </div>
            <div >
                <button id="Start" onClick={handleStart}>START</button>
                <button  className="Stop" onClick={handleStop}>STOP</button>
                <button  className="reset" onClick={handleReset}>RESET</button>
            </div>
        </div>
    )
}