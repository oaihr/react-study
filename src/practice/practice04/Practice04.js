import { useState } from 'react';
import './Practice04.css';
import Box from './Box';
function Practice04(){

    const [boxes, setBoxes] = useState([]); // 1번 방법

    let [arr, setArr] = useState([]); // 2번 방법

    return (

        // 2번방법  arr 배열의 갯수만큼 반복하면서 box 추가
        <>
            <button onClick={()=>{
                let temp = [...arr, 1]; // arr배열에 1 바로 추가하거나 push 이용
                //temp.push('1'); // 아무 값이나 추가해도 됨 -> arr 길이만큼 반복하면서 box를 그림
                setArr(temp);
            }}>추가</button>
            <div>    
                {   
                    //arr 배열의 갯수만큼 반복                
                    arr.map(()=>{
                        return <Box />
                    })
                }
            </div>
        </>
            
        // 1번방법  버튼 누를때마다 boxes 배열에 box 추가
        /* <>
            <button onClick={()=>{
                let temp = [...boxes];
                temp.push(<Box />);
                setBoxes(temp);
            }}>추가</button>
            <div className='boxes'>
                {boxes}
            </div>
        </> */
        
        
    )
        
}

export default Practice04;