import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { FcDeleteDatabase, FcEditImage } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import ProfessoresService from '../../services/academico/ProfessoresService'

const Professores = () => {
    const [professores, setProfessores] = useState([])
    useEffect(() => {
        const professores = ProfessoresService.getAll()
        setProfessores(professores)
    }, [])
    function excluir(i) {
        if (window.confirm('Excluir lista?')) {
            ProfessoresService.delete(i)
            setProfessores(ProfessoresService.getAll())
        }
    }

    return (
        <>
            <Box title="Professores">
                <Link to="/professores/create" className="btn btn-info mb-3"><FaPlus />Novo</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Cpf</th>
                            <th>Matricula</th>
                            <th>salario</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Cep</th>
                        </tr>
                    </thead>
                    <tbody>
                        {professores.map((professores, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/professores/' + i}>
                                        <FcEditImage title="Editar" />{'  '}
                                    </Link>
                                    <FcDeleteDatabase onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{professores.nome}</td>
                                <td>{professores.cpf}</td>
                                <td>{professores.matricula}</td>
                                <td>{professores.salario}</td>
                                <td>{professores.email}</td>
                                <td>{professores.telefone}</td>
                                <td>{professores.cep}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>
        </>
    )
}

export default Professores
