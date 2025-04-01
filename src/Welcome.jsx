import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const alerts = [
    { variant: "success", message: " Benvenuto nel nostro Shop! Scopri i migliori prodotti ai prezzi migliori!" },
    { variant: "warning", message: " Attenzione! Le scorte stanno per terminare, affrettati!" },
    { variant: "danger", message: " Ultime ore per approfittare delle offerte speciali!" }
];

const Welcome = () => {
    const [index, setIndex] = useState(0);

    const handleNextAlert = () => {
        setIndex((prevIndex) => (prevIndex + 1) % alerts.length);
    };

    return (
        <Container className="mt-4 text-center">
            <Alert variant={alerts[index].variant}>
                {alerts[index].message}
            </Alert>

            <Button variant="primary" onClick={handleNextAlert} className="mt-2">
                Mostra il prossimo avviso
            </Button>
        </Container>
    );
};

export default Welcome;