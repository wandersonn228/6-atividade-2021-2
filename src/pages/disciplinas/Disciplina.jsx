import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { FcDeleteDatabase, FcEditImage } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import DisciplinaService from '../../services/academico/DisciplinaService'

const Disciplinas = () => {
    const [disciplinas, setDisciplinas] = useState([])
    useEffect(() => {
        const disciplinas = DisciplinaService.getAll()
        setDisciplinas(disciplinas)
    }, [])
    function excluir(i) {
        if (window.confirm('Excluir lista?')) {
            DisciplinaService.delete(i)
            setDisciplinas(DisciplinaService.getAll())
        }
    }

    return (
        <>
            <Box title="Disciplinas">
                <Link to="/disciplinas/create" className="btn btn-info mb-3"><FaPlus />Novo</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Curso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {disciplinas.map((disciplina, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/disciplinas/' + i}>
                                        <FcEditImage title="Editar" />{'  '}
                                    </Link>
                                    <FcDeleteDatabase onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{disciplina.nome}</td>
                                <td>{disciplina.curso}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>
        </>
    )
}

export default Disciplinas
