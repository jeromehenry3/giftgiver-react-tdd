import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

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
                <Button
                    className='btn-remove'
                    onClick={() => this.props.removeGift(this.props.gift.id)}
                >Retirer le cadeau</Button>
            </div>
        );
    }
}

export default Gift;