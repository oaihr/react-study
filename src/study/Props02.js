import { useState } from "react";
import Box from "./Box";

function Props02 (){

    // 데이터 변경 -> 변경된 데이터가 유지 -> 화면에 표시
    // 재렌더링에서도 데이터 유지해야함
    // 상태변수 (state)
    /* let titleArr = ['아침', '점심', '저녁', '야식'];
    let contentArr = ['시리얼', '햄버거', '삼겹살', '치킨']; */

    let [titleArr, setTitleArr] = useState(['아침', '점심', '저녁', '야식']);
    let [contentArr, setContentArr] = useState(['시리얼', '햄버거', '삼겹살', '치킨']);

    // setTitleArr(매개변수);
    // titleArr = 매개변수;
    
    return(

        //</P> 태그를 대문자로 작성하면 다른 컴포넌트를 가져오는 걸로 생각함
        <div>
            <p></p>

            <button onClick={()=>{
                // setTitleArr(['아침', '점심', '저녁', '야식', '추가야식']);
                // setContentArr(['시리얼', '햄버거', '삼겹살', '치킨', '곱창']);
                /* titleArr.push('추가야식');
                contentArr.push('곱창'); */

                /* setTitleArr(titleArr);
                setContentArr(contentArr); */

                // let temp = titleArr; //얕은복사

                // let temp = [...titleArr, '추가야식'];   //깊은복사

                // 만약 추가조건이~ 최대 6개 까지만 가능하다면
                if(titleArr.length < 6){
                    let temp = [...titleArr];
                    temp.push('추가야식');
                    setTitleArr(temp); // 새로운 주소의 배열 -> state변수 값 바뀜 인식 -> 재렌더링

                    contentArr.push('곱창');    // 위 추가야식에서 재렌더링이 발생하므로 push로도 값이 바뀜
                }
                /* let temp2 = [...contentArr];
                temp2.push('곱창');
                setContentArr(temp2); */

                //얉은 복사(주소만) vs 깊은 복사(값까지 통째로 복사)


            }}>컴포넌트추가</button>

            {/* Box 컴포넌트에 매개변수 전달 */}

            {
                titleArr.map((item, index)=>{
                    //return <Box title={item} content={contentArr[index]}/>
                    return <Box title={titleArr[index]} content={contentArr[index]}/>
                })
            }

            {/* <Box title='아침' content='시리얼'/>      
            <Box title='점심' content='햄버거'/>
            <Box title='저녁' content='삼겹살'/>
            <Box title='야식' content='치킨'/> */}
        </div>

    );
}

export default Props02;
