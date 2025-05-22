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

    return(
        <div>
            <div className='black-nav'>
                <h4 onClick={(event)=>{
                    event.stopPropagation();    // 전파를 막겠다
                    setShowModal(!showModal);
                    //          !true -> false
                    //          !false -> true
                    setSelectedTitle(day[0]);
                }}>Blog Header</h4>
                <p style={{color:'red', fontSize:'20px'}}>{title}</p>
            </div>
            
            <Box title={day[0]}/>            
            <Box title={day[1]}/>
            <Box title={day[2]}/>
            {
                //showModal == true ? <Modal/> : null
                showModal && <Modal title={selectedTitle}/>
            }
            
        </div>
    );
}

export default NewsBlog;