import { useState } from "react";

function Box(props){

    let [cnt, setCnt] = useState(0);
    let [day, setDay] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);

    return(
        <div className='post-list'>
                <h4>{props.title} <span className='heart'onClick={()=>{
                    setCnt(cnt+1);
                }}>💖</span> {cnt}</h4>
                <p>내용 무</p>      
                
                <button onClick={()=>{
                    let temp = [...day];
                    temp[0] = 'Today News';
                    setDay(temp);                   
                }}>제목변경</button>
        </div>
    );
}

export default Box;