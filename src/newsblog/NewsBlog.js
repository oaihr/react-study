import './NewsBlog.css'
import Box from './Box';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog(){

    let title = "React Study"
    let [cnt, setCnt] = useState(0);
    let [day, setDay] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
    const headings = ['Today News', 'Yesterday News', 'Tomorrow News'];

    let[showModal, setShowModal] =useState(true);

    let[selectedTitle, setSelectedTitle] = useState('');

    return(
        <div>
            <div className='black-nav'>
                <h4 onClick={(event)=>{
                    event.stopPropagation();    // 부모요소에 이벤트가 적용되어 있을때 자식요소로의 이벤트 전파를 막겠다
                    setShowModal(!showModal);
                    //          !true -> false
                    //          !false -> true
                    setSelectedTitle(day[0]);
                }}>Blog Header</h4>
                <p style={{color:'red', fontSize:'20px'}}>{title}</p>
            </div>
            
            <Box title={day[0]} setDay={setDay} currentDay={day} index={0} changeTo={'Today News'} /> 
            <Box title={day[1]} setDay={setDay} currentDay={day} index={1} changeTo={'Yesterday News'} />
            <Box title={day[2]} setDay={setDay} currentDay={day} index={2} changeTo={'Tomorrow News'} />
            {
                //showModal == true ? <Modal/> : null
                showModal && <Modal title={selectedTitle}/>
            }
            
        </div>
    );
}

export default NewsBlog;