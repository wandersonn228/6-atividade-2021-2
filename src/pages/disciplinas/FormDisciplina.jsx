import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import DisciplinaService from '../../services/academico/DisciplinaService'
import validador from '../../validators/DisciplinaValidator'


const FormDisciplinas = (props) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    useEffect(() => {
        const id = props.match.params.id
        if (id) {
            const disciplina = DisciplinaService.get(id)
            for (let campo in disciplina) {
                setValue(campo, disciplina[campo])
            }
        }
    }, [props, setValue])
    function enviarDados(dados) {
        const id = props.match.params.id
        id ? DisciplinaService.update(dados, id) : DisciplinaService.create(dados)
        props.history.push('/disciplinas')
    }

    return (
        <>
            <Box title="Disciplinas">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}> Nome :</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="curso">
                        <Form.Label column sm={2}> Curso : </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("curso", validador.curso)} />
                            {errors.curso && <span className="text-danger">{errors.curso.message}</span>}
                        </Col>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}> <FaCheck /> Salvar </Button>
                        <Link className="btn btn-info ml-3" to="/disciplinas"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default FormDisciplinas
