import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';


const CommentsList = ({ comments }) => {
    return (
        <Card className="p-3 mb-4">
            <h5>Commenti</h5>
            <ListGroup variant="flush">
                {comments.map((comment, index) => (
                    <ListGroup.Item key={index} className="mb-3">
                        <div>
                            <p><strong>Rating: {comment.rate}</strong></p>
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
                ))}
            </ListGroup>
        </Card>
    );
};

export default CommentsList;