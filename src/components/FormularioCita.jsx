import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListaCitas from "./ListaCitas";
import { useForm } from "react-hook-form"
import { useState, useEffect } from 'react';

const FormularioCita = () => {
    const [arrayCitas, setArrayCitas] = useState([])
    
    useEffect(() => {
        console.log("Citas actualizadas:", arrayCitas);
    }, [arrayCitas]);

    // para validaciones del form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()




    const guardarCita = (cita) => {
        //despues de las validaciones, guarda la cita
        console.log(cita)
        setArrayCitas([...arrayCitas, cita])
    }

    return (
        <>
            <section className="bg-secondary-subtle rounded shadow mb-3">
                <div className="text-center">
                    <p className="text-bg-secondary py-2">Llenar el formulario para crear una cita</p>
                </div>
                <Form className="container" onSubmit={handleSubmit(guardarCita)}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlMascota">
                        <Form.Label>Nombre de Mascota:</Form.Label>
                        <Form.Control type="text" placeholder="nombre de mascota" {...register('nombreMascota', {
                            required: 'El nombre de la mascota es un dato obligatorio.',
                            minLength: {
                                value: 2,
                                message: 'El valor mínimo requerido son 2 caracteres',
                            },
                            maxLength: {
                                value: 20,
                                message: 'El valor máximo permitido son 20 caracteres',
                            },
                        })} />
                        <Form.Text className="text-danger">
                            {errors.nombreMascota?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlDueno">
                        <Form.Label>Nombre de Dueño:</Form.Label>
                        <Form.Control type="text" placeholder="nombre de dueño" {...register('nombreDueno', {
                            required: 'El nombre del dueño es un dato obligatorio.',
                            minLength: {
                                value: 3,
                                message: 'El valor mínimo requerido son 3 caracteres',
                            },
                            maxLength: {
                                value: 30,
                                message: 'El valor máximo permitido son 30 caracteres',
                            },
                        })} />
                        <Form.Text className="text-danger">
                            {errors.nombreDueno?.message}
                        </Form.Text>
                    </Form.Group>
                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlFecha">
                                <Form.Label>Fecha:</Form.Label>
                                <Form.Control type="date" placeholder="dd/mm/aaaa" {...register('fechaCita', {
                                    required: 'La fecha de la cita es un dato obligatorio.',
                                })} />
                                <Form.Text className="text-danger">
                                    {errors.fechaCita?.message}
                                </Form.Text>
                            </Form.Group>
                        </Col>

                        <Col xs={12} md={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlHora">
                                <Form.Label>Hora:</Form.Label>
                                <Form.Control type="time" placeholder="hh:mm"  {...register('horaCita', {
                                    required: 'La hora de la cita es un dato obligatorio.',
                                })} />
                                <Form.Text className="text-danger">
                                    {errors.horaCita?.message}
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlSintomas">
                        <Form.Label>Síntomas</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="describa síntomas"{...register('sintomas', {
                            required: 'La descripción de los síntomas es un dato obligatorio.',
                            minLength: {
                                value: 10,
                                message: 'El valor mínimo requerido son 10 caracteres',
                            },
                            maxLength: {
                                value: 150,
                                message: 'El valor máximo permitido son 150 caracteres',
                            },
                        })} />
                        <Form.Text className="text-danger">
                            {errors.sintomas?.message}
                        </Form.Text>
                    </Form.Group>
                    <div className="d-flex justify-content-center py-3">
                        <Button type="submit" variant="primary" className="shadow px-4">
                            Agregar nueva cita
                        </Button>
                    </div>
                </Form>
            </section>
            <ListaCitas arrayCitas={arrayCitas}></ListaCitas>
        </>
    );
};

export default FormularioCita;