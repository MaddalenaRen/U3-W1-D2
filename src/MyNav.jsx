import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MyNav = ({ temaColore }) => {
    return (
        <Navbar expand="lg" className={`bg-${temaColore}`}>
            <Container >
                <Navbar.Brand href="#" className='text-light fs-3'>Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" className='text-light fs-3'>About</Nav.Link>
                        <Nav.Link href="#" className='text-light fs-3'>Browse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNav;