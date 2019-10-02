import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export class Main extends Component {
    render() {
        return (
            <Row>
                <Col className="center">Sammy Jackson</Col>
                <Col>Testing</Col>
            </Row>
        )
    }
}

export default Main
