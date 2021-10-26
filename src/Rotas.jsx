import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router'
import FormCursos from './pages/cursos/FormCursos'

const Rotas = () => {
    return (
        <>
            <Switch>
                <Container className="mt-3">
                    <Route exact path="/" component={FormCursos} />
                    <Route exact path="/cursos" component={FormCursos} />
                </Container>
            </Switch>
        </>
    )
}

export default Rotas
