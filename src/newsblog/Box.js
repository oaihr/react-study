import { useState } from "react";

function Box(props){

    const [cnt, setCnt] = useState(0);

    return(
        <div className='post-list'>
                <h4>{props.title} <span className='heart'onClick={()=>{
                    setCnt(cnt+1);
                }}>💖</span> {cnt}</h4>
                <p>내용 무</p>      
                
                <button onClick={()=>{
                    let newDay = [...props.currentDay];
                    newDay[props.index] = props.changeTo;
                    props.setDay(newDay);          
                }}>제목변경</button>
        </div>
    );
}

export default Box;