import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { FcEditImage, FcDeleteDatabase } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import CursoService from '../../services/academico/CursoService'

const Cursos = () => {
    const [cursos, setCursos] = useState([])
    useEffect(() => {
        const cursos = CursoService.getAll()
        setCursos(cursos)
    }, [])
    function excluir(i) {
        if (window.confirm('Excluir lista?')) {
            CursoService.delete(i)
            setCursos(CursoService.getAll())
        }
    }

    return (
        <>
            <Box title="Cursos">
                <Link to="/cursos/create" className="btn btn-info mb-3"><FaPlus />Novo</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Duração</th>
                            <th>Modalidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cursos.map((curso, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/cursos/' + i}>
                                        <FcEditImage title="Editar" />{'  '}
                                    </Link>
                                    <FcDeleteDatabase onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{curso.nome}</td>
                                <td>{curso.duracao}</td>
                                <td>{curso.modalidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>
        </>
    )
}

export default Cursos
