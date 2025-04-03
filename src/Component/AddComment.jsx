import React from 'react';
import { Button, Form, Card } from 'react-bootstrap';

const AddComment = ({ newComment, newRate, onCommentChange, onRateChange, onAddComment }) => {
    return (

        <Card className="p-3 mb-4">
            <h5>Aggiungi un commento</h5>
            <Form>
                <Form.Group controlId="commentText">
                    <Form.Label>Commento</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Scrivi il tuo commento"
                        value={newComment}
                        onChange={onCommentChange}
                    />
                </Form.Group>
                <Form.Group controlId="rating" className="mb-3">
                    <Form.Label>Valutazione</Form.Label>
                    <Form.Control
                        as="select"
                        value={newRate}
                        onChange={onRateChange}
                    >
                        {[1, 2, 3, 4, 5].map(rate => (
                            <option key={rate} value={rate}>{rate}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" onClick={onAddComment}>Aggiungi Commento</Button>
            </Form>
        </Card>

    );
};

export default AddComment;