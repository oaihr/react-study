import './NewsBlog.css'
import React, { useState } from "react";
import Modal from './Modal';
function NewsBlog() {

    let [cnt, setCnt] = useState(['0', '0', '0']);
    let [news, setNews] = useState(['어제의 뉴스', '오늘의 뉴스', '내일의 뉴스']);
    let [newsTimeLine, setNewsTimeLine] = useState(['Yesterday News', 'Today News', 'Tomorrow News']);
    let [text, setText] = useState('');
    let [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={{ color: 'red', fontSize: '20px' }}>React study</p>
            </div>

            <input value={text} type='text' onChange={(event)=>{
                let inputText = event.target.value;
                inputText = inputText.trim();                
                setText(inputText);
            }}></input>
            <button onClick={()=>{
                if(text == ''){
                    alert('빈칸은 안됨')
                    return;
                }
                const addNews = [...news];
                addNews.push(text);
                setNews(addNews);

                const addCnt= [...cnt];
                addCnt.push('0');
                setCnt(addCnt);

                const addNewsTimeLine = [... newsTimeLine];
                addNewsTimeLine.push('');
                setNewsTimeLine(addNewsTimeLine);
            }}>등록</button>
            

            {
                news.map((item, index) => {
                    return(
                        <div className='post-list' onClick={()=>{
                            setShowModal(!showModal);
                            console.log('모달', showModal);
                        }}>
                            <h4>{item}</h4> <span id='heart' onClick={(event) => {
                                const updatedCnt = [...cnt];
                                updatedCnt[index] = Number(cnt[index]) + 1;
                                setCnt(updatedCnt);
                                event.stopPropagation()
                            }}>💖</span>{cnt[index]}
                            <p>내용 무</p>
                            <button onClick={() => {
                                const updatedNews = [...news];
                                updatedNews[index] = newsTimeLine[index];
                                setNews(updatedNews);
                            }}>제목 변경</button>
                            <button onClick={()=>{
                                const updatedCnt = [...cnt];
                                const updatedNews = [...news];
                                const updatedNewsTimeLine = [...newsTimeLine];
                                updatedCnt.splice(index, 1);
                                updatedNews.splice(index, 1);
                                updatedNewsTimeLine.splice(index, 1);
                                setCnt(updatedCnt);
                                setNews(updatedNews);
                                setNewsTimeLine(updatedNewsTimeLine);
                            }}>삭제</button>
                        </div>
                    );
                })
                
            }

            {showModal && <Modal /> }
        </div>
    );
}

export default NewsBlog;