
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ItemCita = () => {
    return (
        <Col>
            <Card >
                <Card.Header>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <p>Mascota:</p>
                    <p>Dueño:</p>
                </Card.Header>
                <Card.Body className="bg-secondary-subtle rounded shadow">
                    <div>
                        <p>Fecha:</p>
                        <p>Hora:</p>
                        <p>Sintomas:</p>
                    </div>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-center'>
                    <Button variant="danger">Borrar</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ItemCita;