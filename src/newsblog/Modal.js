
function Modal(props){

    return(
        <div className="modal" style={{backgroundColor: props.bgColor}}>
            <h3>{props.title} 💖 {props.likeCount}</h3>
            <p>날짜</p>
            <p>상세내용</p>

            <button onClick={()=>{
                    let newDay = [...props.currentDay];
                    newDay[props.index] = props.changeTo;
                    props.setDay(newDay);          
                }}>제목변경</button>
        </div>
    )
}

export default Modal;