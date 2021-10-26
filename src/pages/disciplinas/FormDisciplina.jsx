import React from 'react'
import { Col, Form, Button, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Box from '../../components/Box';

const FormDisciplina = () => {


    const { register, handleSubmit, formState: { errors } } = useForm()

    function enviarDados(dados) {
        console.log(dados);
    }
    return (
        <>
            <Box title="Disciplinas">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}> Nome :</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", { required: true })} />
                            {errors.nome && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="curso">
                        <Form.Label column sm={2}> Curso : </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("curso", { required: true })} />
                            {errors.curso && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}> <FaCheck /> Salvar </Button>
                        <Link className="btn btn-info ml-3" to="/cursos"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default FormDisciplina
