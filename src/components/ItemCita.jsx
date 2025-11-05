
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ItemCita = ({ cita }) => {
    return (
        <Col>
            <Card >
                <Card.Header>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <ul className="list-unstyled">
                        <li>Mascota: {cita.nombreMascota}</li>
                        <li>Dueño:   {cita.nombreDueno}</li>
                    </ul>
                </Card.Header>
                <Card.Body className="bg-secondary-subtle rounded shadow">
                    <ul className="list-unstyled">
                        <li>Fecha:   {cita.fechaCita}</li>
                        <li>Hora:    {cita.horaCita}</li>
                        <li>Sintomas:{cita.sintomas}</li>
                    </ul>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-center'>
                    <Button variant="danger my-2">Borrar</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ItemCita;