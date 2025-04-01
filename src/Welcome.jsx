import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';


const Welcome = () => {

    return (
        <Container className="mt-4 text-center">
            <Alert>
                Benvenuto nel nostro Shop! Scopri i nostri prodotti!
            </Alert>
        </Container>
    );
};

export default Welcome;