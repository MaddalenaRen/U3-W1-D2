import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';


const CommentsList = ({ comments }) => {
    return (
        <Card className="p-3 mb-4">
            <h5>Commenti</h5>
            <ListGroup variant="flush">
                {comments.map((comment, index) => (
                    <ListGroup.Item key={index} className="mb-3">
                        <p><strong>Rating: {comment.rate}</strong></p>
                        <p>{comment.comment}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    );
};

export default CommentsList;