import { useState } from 'react';
import './Practice01.css'

function Practice01(){

    //state변수
    let [cnt, setCnt] = useState(0);

    return(
        <div className='button'>
            <button onClick={()=>{
                setCnt(cnt+2);

            }}>짝수출력</button>
            {/* <span style={ {color: 'red'}}>{cnt}</span> */}
            <span>{cnt}</span>
        </div>    

    );
}

export default Practice01;