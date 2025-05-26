import { Card, Button } from 'react-bootstrap';

function FoodCard(props) {
    return (

        <Card style={{ width: '18rem', marginTop: '3rem' }}>
            {/* <Card.Img variant="top" src={food1} /> */}
            <Card.Img variant="top" src={process.env.PUBLIC_URL +props.food.imageUrl} />
            {/* public 폴더 이용 */}
            <Card.Body>
                <Card.Title>{props.food.title}</Card.Title>
                <Card.Text>
                    {props.food.content}
                </Card.Text>
                <Card.Text>
                    {props.food.price}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

    );

}

export default FoodCard;