import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router'
import Alunos from './pages/alunos/Alunos'
import FormAlunos from './pages/alunos/FormAlunos'
import Curso from './pages/cursos/Curso'
import FormCursos from './pages/cursos/FormCursos'
import Disciplina from './pages/disciplinas/Disciplina'
import FormDisciplina from './pages/disciplinas/FormDisciplina'
import Professores from './pages/professores/Professores'
import FormProfessores from './pages/professores/FormProfessores'


const Rotas = () => {
    return (
        <Container className="mt-3">
            <Switch>
                <Route exact path="/" component={Curso} />
                <Route exact path="/cursos" component={Curso} />
                <Route exact path="/cursos/create" component={FormCursos} />
                <Route exact path="/alunos" component={Alunos} />
                <Route exact path="/alunos/create" component={FormAlunos} />
                <Route exact path="/disciplinas" component={Disciplina} />
                <Route exact path="/disciplinas/create" component={FormDisciplina} />
                <Route exact path="/professores" component={Professores} />
                <Route exact path="/professores/create" component={FormProfessores} />
            </Switch>
        </Container >
    )
}

export default Rotas
