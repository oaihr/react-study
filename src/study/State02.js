import { useState } from "react";   //export { useState } 를 받아옴

function State02(){
    // let v = [] {key:value}
    //JSON -> Javascript Objec

    let text = "";
    let textArr = []; //배열변수
    for(let i=0; i<5; i++){
        text += "<p>안녕하세요~<p>"
        textArr.push(<p>안녕하세요~</p>);
    }

    let numArr = [1,2,3,4,5]; //숫자 배열 (5개짜리 갯수 활용 목적)
    //           [1,1,1,1,1]  (배열의 개수만 활용)

    let msgArr = ["안녕", "밥먹었니", "졸리니", "집에가고싶니"];
                                                                                // state 변수에 
    let [colorArr, setColorArr] = useState(['빨강', '파랑', '노랑', '초록']);   //배열 담을 수 있음
    let [item, setItem] = useState( {name:"핸드크림", price:9000} );           //객체 담을 수 있음

    return (
        <div>
            <p>안녕하세요!</p>
            <p>안녕하세요!</p>
            <p>안녕하세요!</p>
            <p>안녕하세요!</p>
            <p>안녕하세요!</p>
            <hr></hr>
            {textArr}
            <hr></hr>
            {text}
            <hr></hr>
            {
                numArr.map( ()=>{
                    return(
                        <>
                            <p>반갑습니다~!</p>
                            <p>하이</p>
                            <button>버튼</button>
                        </>
                    )
                } )
            }
            <hr></hr>
            {
                msgArr.map( (msg)=>{    //map에서 변수는 배열의 값들 나타냄
                    return(
                        <p>이번 메세지는 {msg}</p>
                    )
                })
            }

            <hr></hr>
            {
                colorArr.map( (item)=>{
                    return(
                        <p>색상은 {item}</p>
                    )
                })
            }
        </div>
    );
}

export default State02;