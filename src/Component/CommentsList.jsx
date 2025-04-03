import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';


const CommentsList = ({ comments = [], onDeleteComment }) => {
    return (
        <Card className="p-3 mb-4" style={{ height: '400px', overflowY: 'scroll' }}>
            <h5>Commenti</h5>
            <ListGroup variant="flush">
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <ListGroup.Item key={index} className="mb-3">
                            <div>
                                <p><strong>Rating: {comment.rate}/5</strong></p>
                                <p><strong>{comment.author}</strong></p>
                                <p>{comment.comment}</p>
                            </div>
                            <Button
                                variant="danger"
                                onClick={() => onDeleteComment(comment._id)}
                                size="sm"
                            >
                                DELETE
                            </Button>
                        </ListGroup.Item>
                    ))
                ) : (
                    <p>Nessun commento disponibile</p>
                )}
            </ListGroup>
        </Card>
    );
};

export default CommentsList