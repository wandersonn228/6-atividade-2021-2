import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router'
import FormAlunos from './pages/alunos/FormAlunos'
import FormCursos from './pages/cursos/FormCursos'
import FormDisciplina from './pages/disciplinas/FormDisciplina'
import FormProfessores from './pages/professores/FormProfessores'

const Rotas = () => {
    return (
        <>
            <Switch>
                <Container className="mt-3">
                    <Route exact path="/" component={FormCursos} />
                    <Route exact path="/cursos" component={FormCursos} />
                    <Route exact path="/alunos" component={FormAlunos} />
                    <Route exact path="/disciplinas" component={FormDisciplina} />
                    <Route exact path="/professores" component={FormProfessores} />
                </Container>
            </Switch>
        </>
    )
}

export default Rotas
