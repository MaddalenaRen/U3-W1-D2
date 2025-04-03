import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Card, Button, Row, Col } from 'react-bootstrap';
import fantasyBooks from './books/fantasy.json';
import horrorBooks from './books/horror.json';
import historyBooks from './books/history.json'
import sciFiBooks from './books/scifi.json';
import romanceBooks from './books/romance.json';
import SingleBook from './Component/SingleBook';
import CommentArea from './Component/CommentArea';
import CommentsList from './Component/CommentsList';
import AddComment from './Component/AddComment';
import Modal from "react-bootstrap/Modal"


const categories = {
    fantasy: fantasyBooks,
    history: historyBooks,
    horror: horrorBooks,
    sciFi: sciFiBooks,
    romance: romanceBooks
};

const AllTheBooks = () => {
    //const [books, setBooks] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("fantasy");
    const [selectedBook, setSelectedBook] = useState(null);
    const [showComments, setShowComments] = useState(false);

    const handleSelectBook = (book) => {
        setSelectedBook(book);
        setShowComments(true);
    };
    const handleCloseModal = () => {
        setShowComments(false);
    };

    return (
        <Container>
            {/* aggiunto  Bottoni per cambiare categoria */}
            <div className="mb-4 text-center">
                {Object.keys(categories).map((category) => (
                    <Button
                        key={category}
                        variant={currentCategory === category ? "dark" : "primary"}
                        onClick={() => setCurrentCategory(category)}
                        className="m-1"
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Button>
                ))}
            </div>


            <Row>
                {categories[currentCategory].map((book, index) => {

                    const selected = selectedBook && selectedBook.asin === book.asin;


                    const cardClass = selected ? "border-danger" : "border-secondary";
                    const cardStyle = selected ? { backgroundColor: "#f0f8ff", borderWidth: "4px" } : {};

                    return (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <Card
                                className={`h-100 ${cardClass}`}
                                style={cardStyle}
                                onClick={() => handleSelectBook(book)}
                            >
                                <Card.Img variant="top" src={book.img} className="h-100" />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="text-truncate">{book.title}</Card.Title>
                                    <Card.Text className="text-truncate">
                                        <strong>Price:</strong> ${book.price}
                                        <br />
                                        <strong>Category:</strong> {book.category}
                                    </Card.Text>
                                    <div className="mt-auto">
                                        <Button variant="primary" href={`https://www.amazon.com/dp/${book.asin}`} target="_blank" className="w-100">
                                            Compra!
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>

            <Modal show={showComments} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Recensioni per {selectedBook ? selectedBook.title : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedBook && (
                        <>
                            <CommentArea bookId={selectedBook.asin} />

                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Chiudi
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default AllTheBooks;