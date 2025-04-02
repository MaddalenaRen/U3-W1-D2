import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";



const BookList = ({ books }) => {
    return (
        <Container>
            <Row className="g-4">
                {books.map((book) => (
                    <SingleBook key={book.asin} book={book} />
                ))}
            </Row>
        </Container>
    )

}
export default BookList;