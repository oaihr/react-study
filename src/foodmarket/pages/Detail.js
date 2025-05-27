import './Detail.css'

import { useParams } from 'react-router';

import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useEffect, useState } from 'react';

function Detail({ foods }) {

    /* http://localhost:3000/detail/id값 */
    let { id } = useParams();

    let [orderCount, setOrderCount] = useState(0);

    let [showModal, setShowModal] = useState(false);
                                        // false 모달창 안뜸

    let [viewClass, setViewClass] = useState('');                                    

    // foods 전체 정보 보유

    // id : 현재 페이지에서 표시해야하는 food의 id가 확인됨




    // lifeCylcle (생성mount, 수정update, 삭제unmount)
    // useEffect(실행할 함수, 의존성 배열)
    // useEffect(실행할 함수{ return ()=>{clean up function} }, 의존성 배열)

    /* useEffect(() => {     // 의존성 배열x -> 매번 렌더링시 실행 (로딩생성mount, 수정update)
        console.log('useEffect');
    }); */

   /*  useEffect(() => {     // 의존성 빈 배열o -> 로딩생성(mount)   처음 1번만 실행
        console.log('useEffect, []');
    }, []); */

    useEffect(() => {     // 의존성 배열 -> 로딩생성mount, 배열 내에 변수가 변경될 때(수정 update)
        console.log('useEffect, [orderCount]');
        console.log(orderCount);

        return () => { console.log('useEffect, [orderCount]에 들어있는 return 함수 실행') }

    }, [orderCount]);


    /* useEffect( ()=>{   // 렌더링 될 때 함수를 실행
        let cnt = 0;
        let intv = setInterval(()=>{   // 렌더링이 될 때마다 인터벌이 추가로 실행됨
            console.log(cnt++);
        }, 1000)

        return()=>{
            clearInterval(intv);    // 새로 렌더링이 일어나면 이전 인터벌은 없애고 인터벌이 새로 실행됨
        }
    }) */

    
    // modal 창 가리기
    useEffect(()=>{
        
        setTimeout(()=>{
            setShowModal(false);
        }, 2000)
        
    }, [])

    // container opacity 변환 효과

    useEffect(()=>{
        
        setTimeout(()=>{
            setViewClass('end'); // '' -> 'end'
                            // 'start ' -> 'start end'
        }, 100)        
    
    },[])



    let food = foods.find((item) => item.id == id);

    //foods.findIndex를 이용하면
    //if(food == -1) // 해당 값을 갖는 인덱스 없음 -1

    // console.log(food);

    if (food == undefined) { // 잘못된 id값이 들어옴. 해당 id 상품 없음
        return (
            <div><h1>존재하지 않는 상품입니다.</h1></div>
        );
    }

    
    //style 객체 단위로 관리
    const tempStyle = {
        color: "orange",
        fontSize: '20px'
    };

    const blueTextStyle = {
        color: "blue"
    }

    const styles = {
        redStyle:{
            color: "red"
        },
        blueStyle:{
            color: "blue"
        },
        fontBigBold:{
            fontSize: "2rem",
            fontWeight: "bold"
        }
        
    }


    /*
    
        조건에 따라서 스타일 적용
    
        가격표시 {food.price}
            1만원 이상 -> 빨간색
            1만원 미안 -> 파란색

        food.price >= 10000    
    */

    // 1) js 객체 이용
    const priceTextStyle = {
        color: (food.price>=10000) ? 'red' : 'blue'
    }
    //<p style={priceTextStyle}>{food.price}</p>
    //<p style={ {color: (food.price>=10000) ? 'red' : 'blue'} }>{food.price}</p>


    // 2) js 함수 형태
    const priceTextStyleFunc = (price)=>{

        if(price > 10000)
            return {color: "red"}
        else
            return {color: "blue"}

        //return {color: price>=10000 ? 'red' : 'blue'}
    }
    // <p style={priceTextStyleFunc(food.price)}>{food.price}</p>


    /*3) css 클래스명 연계 활용

        //단일 클래스 적용
        <p className={ food.price>=10000 ? 'price-red' : 'price-blue'}>{food.price}</p>

        //다중 클래스 적용
        <p className={ food.price>=10000 ? 'price-red text-strong' : 'price-blue text-strong'}>{food.price}</p>

            +연산
            <p className={ 'text-strong '+(food.price>=10000 ? 'price-red' : 'price-blue') }>{food.price}</p>
            
            join 함수
            <p className={ ['text-strong', food.price>=10000 ? 'price-red' : 'price-blue'].join(" ")  }>{food.price}</p>

            변수
            const priceClassName = 'text-strong price-red'

            백틱 활용 `
            <p className={ `text-strong, ${food.price>=10000 ? 'price-red' : 'price-blue'} ` }>{food.price}</p> 

    */


    return (                // 'start    end'
        <Container className={'start ' +viewClass}>
            <Row>
                <Col md={6}>
                    <img src={process.env.PUBLIC_URL + food.imageUrl} width="100%" />
                </Col>
                <Col md={6}>
                    <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
                    {/* <p style={tempStyle}>{food.content}</p> */}
                    <p style={styles.fontBigBold}>{food.content}</p>
                    
                    <p className={ ['text-strong', food.price>=10000 ? 'price-red' : 'price-blue'].join(" ")  }>{food.price}</p>
                    
                    <p>
                        <Button variant="dark" onClick={() => {                            
                            if (orderCount > 0)
                                setOrderCount(orderCount - 1);
                        }}>-</Button>
                        <span> {orderCount} </span>
                        <Button variant="dark" onClick={() => {

                            if( food.stockCount >= orderCount+1 )
                                setOrderCount(orderCount+1);

                            /* setOrderCount(orderCount + 1);
                            if(orderCount >= food.stockCount){
                                    alert('최대 수량은 '+food.stockCount+'개 입니다.')
                                    setOrderCount(orderCount + 1);
                                }               */              
                        }}>+</Button>
                    </p>

                    {food.stockCount==0 ? <Button variant="danger" disabled>품절</Button>:<Button variant="primary">주문하기</Button>}
                </Col>
            </Row>

            {
                //showModal &&
                //showModal == true ?   :
            }

            <Modal show={showModal} onHide={()=>{ setShowModal(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title>환영합니다</Modal.Title>
                </Modal.Header>
                <Modal.Body>어서오세요~ Food 구경하세요~</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"  onClick={()=>{ setShowModal(false) }}>
                        확인
                    </Button>
                </Modal.Footer>
            </Modal>    





        </Container>
    );
}
export default Detail;