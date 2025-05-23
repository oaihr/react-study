import './NewsBlog.css'
import Box from './Box';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog(){

    let title = "React Study"
    let [day, setDay] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
    const headings = ['Today News', 'Yesterday News', 'Tomorrow News'];

    let[showModal, setShowModal] =useState(true);

    let[selectedTitle, setSelectedTitle] = useState('');
    let[selectedLikeCount, setSelectedLikeCount] = useState(0);

    return(
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={{color:'red', fontSize:'20px'}}>{title}</p>
            </div>
            
            {
                day.map((item, index)=>{
                   return <Box title={item} day={day} setSelectedTitle={setSelectedTitle} showModal={showModal} setShowModal={setShowModal} 
                   setDay={setDay} currentDay={day} index={index} changeTo={headings[index]} 
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