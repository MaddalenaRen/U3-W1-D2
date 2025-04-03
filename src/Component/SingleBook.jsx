import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Modal from "react-bootstrap/Modal"
import CommentArea from './CommentArea';



class SingleBook extends Component {
    state = {
        selected: false, // Definiamo lo stato direttamente qui
        showModal: false
    };
    toggleSelect = () => {

        console.log("Card cliccata");
        this.setState(prevState => {
            // Mostra il modale solo se la card è selezionata
            const selected = !prevState.selected;
            return {
                selected,
                showModal: selected // Solo quando selected è true mostriamo il modale
            };
        });

    };
    handleClose = () => {
        this.setState({ showModal: false });
    }

    render() {
        const { book } = this.props;
        const { selected, showModal } = this.state;

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


            <>
                <Card className={`h-100 ${cardClass}`} style={cardStyle} onClick={this.toggleSelect}>
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
                <Modal show={showModal} onHide={this.handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Recensioni per {book.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CommentArea bookId={book.asin} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Chiudi
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>




        );
    };
}
export default SingleBook;