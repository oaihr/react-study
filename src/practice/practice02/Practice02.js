import { useState } from 'react';
import './Practice02.css'

function Practice02(){

    //useState -> state변수: 재렌더링발생, 데이터값유지
    const arr = ['하나', '둘', '셋'];
    const [text, setText] = useState(arr[0]);
    const [index, setIndex] = useState(0);

    return(
        <div className="change">
            <p>{text}</p>
            <button onClick={()=>{
                let nextIndex = index +1;
                if(nextIndex >= arr.length){
                    nextIndex = 0;
                }
                setIndex(nextIndex);
                setText(arr[index]);
            }}>변경버튼</button>
        </div>
    );

/* 
    let textArr = ['하나', '둘', '셋'];
    let [index, setIndex] = useState(0);
    return(
        <div className='App'>
            <p>{textArr[index]}</p>
            <button onClick={()=>{
                setIndex((index+1) % textArr.length);
            }}>변경버튼</button>
        </div>
    ); */

    // if문에서 바로 return ==========================================
    /* let [num, setNum] = useState(1);

    if(num == 1){
        return(
            <div className="change">
                <p>하나</p>
                <button onClick={()=>{
                    setNum(2);
                }}>변경버튼</button>
            </div>
        );
    }else if(num ==2){
        return(
            <div className="change">
                <p>둘</p>
                <button onClick={()=>{
                    setNum(3);
                }}>변경버튼</button>
            </div>
        );
    }else{
        return(
            <div className="change">
                <p>셋</p>
                <button onClick={()=>{
                    setNum(1);
                }}>변경버튼</button>
            </div>
        );
    } */


}

export default Practice02;