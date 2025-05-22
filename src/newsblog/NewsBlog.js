import './NewsBlog.css'
import Box from './Box';
import { useState } from 'react';

function NewsBlog(){

    let title = "React Study"
    let [day, setDay] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
    const headings = ['Today News', 'Yesterday News', 'Tomorrow News'];
    
    return(
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={{color:'red', fontSize:'20px'}}>{title}</p>
            </div>
            
            <Box title={day[0]}/>            
            <Box title={day[1]}/>
            <Box title={day[2]}/>

            
        </div>
    );
}

export default NewsBlog;