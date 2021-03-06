import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Atividade 6</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/cursos">Cursos</Link>
                        <Link className="nav-link" to="/disciplinas">Disciplina</Link>
                        <Link className="nav-link" to="/professores">Professores</Link>
                        <Link className="nav-link" to="/alunos">Alunos</Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Menu
