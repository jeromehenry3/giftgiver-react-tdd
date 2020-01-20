import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class Gift extends Component {
    state = {
        person: '',
        present: '',
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Personne</Form.Label>
                        <Form.Control
                            onChange={evt => this.setState({ person: evt.target.value })}
                            className='input-person'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Cadeau</Form.Label>
                        <Form.Control
                            onChange={evt => this.setState({ present: evt.target.value })}
                            className='input-present'
                        />
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default Gift;