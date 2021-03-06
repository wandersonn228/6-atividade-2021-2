import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { FcEditImage, FcDeleteDatabase } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import AlunoService from '../../services/academico/AlunoService'

const Alunos = () => {

    const [alunos, setAlunos] = useState([])
    useEffect(() => {
        const alunos = AlunoService.getAll()
        setAlunos(alunos)
    }, [])
    function excluir(i) {
        if (window.confirm('Excluir lista?')) {
            AlunoService.delete(i)
            setAlunos(AlunoService.getAll())
        }
    }

    return (
        <>
            <Box title="Alunos">
                <Link to="/alunos/create" className="btn btn-info mb-3"><FaPlus />Novo</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Cpf</th>
                            <th>Matricula</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Cep</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map((aluno, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/alunos/' + i}>
                                        <FcEditImage title="Editar" />{'  '}
                                    </Link>
                                    <FcDeleteDatabase onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.cpf}</td>
                                <td>{aluno.matricula}</td>
                                <td>{aluno.email}</td>
                                <td>{aluno.telefone}</td>
                                <td>{aluno.cep}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>
        </>
    )
}

export default Alunos
