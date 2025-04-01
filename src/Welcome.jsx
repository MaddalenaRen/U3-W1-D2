import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';


const Welcome = () => {

    return (
        <Container className="mt-4 text-center">
            <Alert >
                <h1 className='fw-bold fs-1'>Benvenuto nel nostro Shop!</h1>
                <p className='fs-3'> Scopri i nostri prodotti!</p>
            </Alert>
        </Container>
    );
};

export default Welcome;