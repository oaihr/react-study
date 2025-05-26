import { useState } from 'react';
import './Practice05.css';

function Practice05() {

    const [boxes, setBoxes] = useState([]);

    const makeFrontBox = (event)=>{
        const boxColor = event.target.dataset.color;
        const newBox = <div className='box' style={{backgroundColor: boxColor}}></div>
        setBoxes([newBox, ...boxes])
    }

    const makeBackBox = (event)=>{
        const boxColor = event.target.dataset.color;
        const newBox = <div className='box' style={{backgroundColor: boxColor}}></div>
        setBoxes([...boxes, newBox])
    }

    const frontBoxDel = ()=>{
        const temp = [...boxes];
        temp.shift();
        setBoxes(temp);
    }
    const backBoxDel = ()=>{
        const temp = [...boxes];
        temp.pop();
        setBoxes(temp);
    }
    return (
        <div>
            <button data-color="red" onClick={makeFrontBox}>앞빨간박스추가</button>
            <button data-color="blue" onClick={makeFrontBox}>앞파란박스추가</button>
            <button data-color="green" onClick={makeFrontBox}>앞초록박스추가</button>

            <button data-color="red" onClick={makeBackBox}>뒤빨간박스추가</button>
            <button data-color="blue" onClick={makeBackBox}>뒤파란박스추가</button>
            <button data-color="green" onClick={makeBackBox}>뒤초록박스추가</button>

            <button onClick={frontBoxDel}>앞 박스 삭제</button>
            <button onClick={backBoxDel}>뒷 박스 삭제</button>
            <div>
                {boxes}
            </div>
        </div>
    );
}

export default Practice05;