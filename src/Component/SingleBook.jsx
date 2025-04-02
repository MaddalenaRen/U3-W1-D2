import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"



class SingleBook extends Component {
    state = {
        selected: false // Definiamo lo stato direttamente qui
    };
    toggleSelect = () => {
        console.log("Card cliccata");
        this.setState(prevState => ({
            selected: !prevState.selected
        }));
    };

    render() {
        const { book } = this.props;
        const { selected } = this.state;

        if (!book) {
            return <div>Loading...</div>;  // non compariva nulla nella pagina e non ne capivo il motivo, ho provato con questa riga di codice ed ha smesso di esplodere tutto, in questo modo si dovrebbe verificare se la prop è definita o meno 
        }

        // const book = {
        //     "asin": "0316438960",
        //     "title": "The Last Wish: Introducing the Witcher",
        //     "img": "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
        //     "price": 9.59,
        //     "category": "fantasy"
        // };

        const cardClass = selected ? "border-danger" : "border-secondary";
        const cardStyle = selected ? { backgroundColor: "#f0f8ff", borderWidth: "4px" } : {};

        return (


            <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card className={`h-100 ${cardClass}`} style={cardStyle}
                    onClick={this.toggleSelect}>
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
    };
}
export default SingleBook;