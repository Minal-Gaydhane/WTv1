import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Components/Navbar.css'
import { Dropdown, Button, ButtonGroup } from 'react-bootstrap';

function CollapsibleExample() {
    return (
        <>
            <Navbar className='Navbar' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src='Images/logocnf.png' alt="logo" width="80px"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Button variant="dark" className='NavLink'>Home</Button>
                            <Button variant="dark" className='NavLink'>About</Button>
                            <Dropdown className="NavLink" as={ButtonGroup}>
                                <Button variant="dark">Products</Button>
                                <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Sketches & Paintings</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Crafts</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Pottery</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Ornaments</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Gift Cards</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-end text-light'><span className='text'>Call Us!</span> <br /> 123456789</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default CollapsibleExample;