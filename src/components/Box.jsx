import React from 'react'
import { Card } from 'react-bootstrap'

const Box = (props) => {
    return (
        <>
            <Card border="info">
                <Card.Header className="bg-info text-whith">{props.title}</Card.Header>
                <Card.Body>
                    {props.children}
                </Card.Body>
            </Card>
        </>
    )
}

export default Box
