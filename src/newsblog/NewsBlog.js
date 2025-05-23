import './NewsBlog.css'
import Box from './Box';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog(){

    let title = "React Study"
    let [day, setDay] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
    const headings = ['Today News', 'Yesterday News', 'Tomorrow News'];

    let[showModal, setShowModal] =useState(false);

    let[selectedTitle, setSelectedTitle] = useState('');
    let[selectedLikeCount, setSelectedLikeCount] = useState(0);

    // input 값을 저장할 변수
    let [inputText, setInputText] = useState('');

    return(
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={{color:'red', fontSize:'20px'}}>{title}</p>
            </div>

            <div>
                <input type='text' id='input_news' value={inputText} onChange={(event)=>{
                    // console.log(event);
                    console.log(event.target.value);
                    setInputText(event.target.value);
                }}></input>
                <button onClick={()=>{
                    // 입력된 값을 제목 배열에 추가
                    // 입력된값: input요소에서 onChange가 발생할때 -> inputText(state 변수)에 저장되어있음
                    // 제목배열 news 배열변수 추가 -> 렌더링 -> day 배열의 갯수만큼 반복(map) 화면에 표시

                    // 입력된 값이 있을때만 news 추가하기 

                    // v1=========================================================================================
                    
                    //if(inputText.trim() != ''){   문자열이 비었는지 체크
                    /* if(inputText.trim().length > 0){    // 문자열 길이로 체크
                        let temp = [...day];
                        temp.push(inputText);
                        setDay(temp);
                        
                    }else{
                        alert('내용을 입력 후 등록하세요');
                    } */

                    // v2=========================================================================================
                    
                    inputText = inputText.trim();

                    if(inputText.length == 0){
                        alert('내용을 입력 후 등록하세요');
                        setInputText('');
                        return;
                    }
                            let temp = [...day];
                            temp.push(inputText);
                            setDay(temp);

                    // 배열 state 변수 바꾸는 법: 배열복사 -> 값 변경/추가/삭제 -> set함수로 원래 배열에 저장
                    
                    setInputText(''); // 공백 -> input value={inputText}

                    /*
                        javascript스타일

                        let title = document.getElementByID('input_news').value;
                        let temp = [...news];
                        temp.push(title);
                        setNews(temp);

                        document.getElementByID('input_news').value = '';

                    */
                }}>등록</button>

            </div>
            
            {
                day.map((item, index)=>{
                   return <Box title={item} day={day} setSelectedTitle={setSelectedTitle} showModal={showModal} setShowModal={setShowModal} 
                   setDay={setDay} currentDay={day} index={index} changeTo={headings[index]} key={index}
                   setSelectedLikeCount={setSelectedLikeCount}/>
                })
            }
            
                {/* showModal == true ? <Modal/> : null */}
                
            {
                //props 전달
                //변수, 배열, 객체, 함수, 요소(컴포넌트)
                showModal && <Modal title={selectedTitle} likeCount={selectedLikeCount}
                setDay={setDay} currentDay={day} changeTo={selectedTitle} bgColor='lightblue'
                />
            }
            
            
        </div>
    );
}

export default NewsBlog;