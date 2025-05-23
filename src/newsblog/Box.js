import { useState } from "react";

function Box(props){

    const [cnt, setCnt] = useState(0);

    return(
        <div className='post-list'>
                <h4 onClick={()=>{
                    props.setShowModal(!props.showModal);
                    props.setSelectedTitle(props.title);
                    props.setSelectedLikeCount(cnt);
                }}>{props.title} <span className='heart'onClick={(event)=>{
                    event.stopPropagation();    // 부모요소에 이벤트가 적용되어 있을때 자식요소로의 이벤트 전파를 막겠다
                    setCnt(cnt+1);
                }}>💖</span> {cnt}</h4>
                <p>내용 무</p> 

                <button onClick={()=>{
                    let newDay = [...props.currentDay];
                    newDay[props.index] = props.changeTo;
                    props.setDay(newDay);          
                }}>제목변경</button>
                <button onClick={()=>{
                    let temp = [...props.day];
                    temp.splice(props.index, 1);
                    props.setDay(temp);
                }}>삭제</button>
        </div>
    );
}

export default Box;