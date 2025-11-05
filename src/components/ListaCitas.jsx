import Row from 'react-bootstrap/Row';
import ItemCita from "./ItemCita";

const ListaCitas = ({ arrayCitas }) => {
    return (
        <>
            <section className="bg-secondary-subtle rounded shadow">
                <div className="text-center">
                    <p className="text-bg-secondary py-2">Lista de Citas</p>
                </div>
                <Row xs={1} md={2} className="container g-3">
                    {
                        arrayCitas.map((cita, indice) => <ItemCita key={indice} cita={cita} ></ItemCita>)
                    }
                </Row>
            </section>
        </>
    );
};

export default ListaCitas;