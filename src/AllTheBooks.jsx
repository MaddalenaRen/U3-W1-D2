import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import booksData from './fantasy.json'; // Assicurati che il percorso sia corretto

const AllTheBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Qui usiamo i dati importati direttamente
        setBooks(booksData);
    }, []);

    return (
        <Row>
            {books.map((book, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>
                                <strong>Price:</strong> ${book.price}
                                <br />
                                <strong>Category:</strong> {book.category}
                            </Card.Text>
                            <Button variant="primary" href={`https://www.amazon.com/dp/${book.asin}`} target="_blank">
                                Buy Now
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default AllTheBooks;