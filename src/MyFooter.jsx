import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const MyFooter = () => {
    const currentYear = new Date().getFullYear()

    return (
        <Navbar bg="primary" variant="primary" className="mt-5">
            <Container className="text-center py-3">
                <span className="text-light mx-auto">© {currentYear} Il Mio Sito. Tutti i diritti riservati.</span>
            </Container>
        </Navbar>
    );
}

export default MyFooter;