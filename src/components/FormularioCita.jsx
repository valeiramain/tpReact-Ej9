import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListaCitas from "./ListaCitas";

const FormularioCita = () => {
    return (
        <section className="bg-secondary-subtle rounded shadow">
            <div className="text-center">
                <p className="text-bg-secondary py-2">Llenar el formulario para crear una cita</p>
            </div>
            <Form className="container">
                <Form.Group className="mb-3" controlId="exampleForm.ControlMascota">
                    <Form.Label>Nombre de Mascota:</Form.Label>
                    <Form.Control type="text" placeholder="nombre de mascota" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlDueno">
                    <Form.Label>Nombre de Dueño:</Form.Label>
                    <Form.Control type="text" placeholder="nombre de dueño" />
                </Form.Group>
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlFecha">
                            <Form.Label>Fecha:</Form.Label>
                            <Form.Control type="date" placeholder="dd/mm/aaaa" />
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlHora">
                            <Form.Label>Hora:</Form.Label>
                            <Form.Control type="time" placeholder="hh:mm" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlSintomas">
                    <Form.Label>Síntomas</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="describa síntomas" />
                </Form.Group>
                <div className="d-flex justify-content-center">
                    <Button type="submit" variant="primary" className="shadow px-4">
                        Agregar nueva cita
                    </Button>
                </div>
            </Form>

            <ListaCitas></ListaCitas>
        </section>
    );
};

export default FormularioCita;