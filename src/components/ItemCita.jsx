
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ItemCita = ({ cita, borrarCita }) => {
    return (
        <Col>
            <Card >
                <Card.Header>
                    <ul className="list-unstyled mb-0 text-center">
                        <li>
                            <strong>Mascota:</strong> {cita.nombreMascota}
                        </li>
                        <li>
                            <strong>Dueño:</strong> {cita.nombreDueno}
                        </li>
                    </ul>
                </Card.Header>
                <Card.Body className="bg-secondary-subtle rounded shadow">
                    <ul className="list-unstyled mb-0">
                        <li className="mb-1">
                            <strong>Fecha:</strong>{" "}
                            {new Date(cita.fechaCita)
                                .toLocaleDateString("es-AR", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                })
                                .replaceAll("/", "-")}
                        </li>
                        <li className="mb-1">
                            <strong>Hora:</strong> {cita.horaCita}
                        </li>
                        <li>
                            <strong>Síntomas:</strong> {cita.sintomas}
                        </li>
                    </ul>
                </Card.Body>
                <Card.Footer className="bg-white d-flex justify-content-center">
                    <Button
                        variant="danger"
                        className="px-4 rounded-pill shadow-sm"
                        onClick={() => borrarCita(cita.IDCita)}
                    >
                        🗑️ Borrar
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ItemCita;