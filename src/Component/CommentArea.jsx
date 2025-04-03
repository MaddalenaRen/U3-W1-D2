import React, { Component } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import { Spinner } from 'react-bootstrap';


class CommentArea extends Component {
    state = {
        comments: [], // Lista di commenti
        newComment: '', //  nuovo commento
        newRate: 1, //stelline
    };

    componentDidMount() {
        const { bookId } = this.props;
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlOGIxZTk0OTJlNDAwMTVlN2M2ZmMiLCJpYXQiOjE3NDM2ODY0MzAsImV4cCI6MTc0NDg5NjAzMH0.zXcBLVSlNuYEWVdsZTpnxINfAh5B_djo697OXkNGCdY"
            }
        })
            .then((response) => {
                if (response.ok) {

                    return response.json();
                } else {
                    throw new Error('Errore nella fetch');
                }
            }).then(data => {  // Salva i commenti nel stato
                this.setState({ comments: data }); // Impostiamo i commenti nel nostro stato
            })
            .catch(error => console.error('Error fetching comments:', error));
    }

    // Funzione per aggiungere un commento
    handleInputChange = (e) => {
        this.setState({ newComment: e.target.value });
    };
    handleRateChange = (e) => {
        this.setState({ newRate: e.target.value });
    };
    handleAddComment = () => {
        const { newComment, newRate } = this.state;
        const { bookId } = this.props; // L'ID del libro

        const newCommentObj = {
            comment: newComment,
            rate: newRate,
            elementId: bookId
        };

        fetch('https://striveschool-api.herokuapp.com/api/comments/', {
            method: 'POST',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlOGIxZTk0OTJlNDAwMTVlN2M2ZmMiLCJpYXQiOjE3NDM2ODY0MzAsImV4cCI6MTc0NDg5NjAzMH0.zXcBLVSlNuYEWVdsZTpnxINfAh5B_djo697OXkNGCdY",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCommentObj)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Errore nell\'invio del commento');
                }
            })
            .then(data => {
                // Aggiungiamo il nuovo commento alla lista dei commenti
                this.setState(prevState => ({
                    comments: [...prevState.comments, data],
                    newComment: '', // Resettiamo il campo di input
                    newRate: 1 // Resettiamo la valutazione
                }));
            })

            .catch(error => console.error('Error adding comment:', error));
    };

    handleDeleteComment = (commentId) => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlOGIxZTk0OTJlNDAwMTVlN2M2ZmMiLCJpYXQiOjE3NDM2ODY0MzAsImV4cCI6MTc0NDg5NjAzMH0.zXcBLVSlNuYEWVdsZTpnxINfAh5B_djo697OXkNGCdY",
            }
        })
            .then(response => {
                if (response.ok) {
                    // Rimuoviamo il commento da stato
                    this.setState(prevState => ({
                        comments: prevState.comments.filter(comment => comment._id !== commentId)
                    }));
                } else {
                    throw new Error('Errore nella cancellazione del commento');
                }
            })
            .catch(error => console.error('Error deleting comment:', error));
    };

    render() {
        const { comments, newComment, newRate } = this.state;
        return (
            <div>
                <h3>Recensioni</h3>
                <CommentsList comments={comments} /> {/* Mostra i commenti */}
                <AddComment
                    newComment={newComment}
                    newRate={newRate}
                    onCommentChange={this.handleInputChange}
                    onRateChange={this.handleRateChange}
                    onAddComment={this.handleAddComment}
                />
            </div>
        );
    }
}


export default CommentArea;