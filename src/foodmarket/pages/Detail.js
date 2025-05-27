import './Detail.css'

import { useParams } from 'react-router';

import { Container, Row, Col, Button } from "react-bootstrap";

function Detail( {foods} ) {

    /* http://localhost:3000/detail/id값 */
    let { id } = useParams();

    // foods 전체 정보 보유

    // id : 현재 페이지에서 표시해야하는 food의 id가 확인됨


    let food = foods.find((item) => item.id == id);
    
    //foods.findIndex를 이용하면
    //if(food == -1) // 해당 값을 갖는 인덱스 없음 -1

    // console.log(food);

    if(food == undefined){ // 잘못된 id값이 들어옴. 해당 id 상품 없음
        return(
            <div><h1>존재하지 않는 상품입니다.</h1></div>
        );
    }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img src={process.env.PUBLIC_URL + food.imageUrl} width="100%" />
                </Col>
                <Col md={6}>
                    <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
                    <p>{food.content}</p>
                    <p>{food.price}</p>
                    <p>
                        <Button variant="dark">-</Button>
                        <span> 0 </span>
                        <Button variant="dark">+</Button>
                    </p>

                    <Button variant="primary">주문하기</Button>
                </Col>
            </Row>
        </Container>
    );
}
export default Detail;