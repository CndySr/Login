import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navi() {
    return (
        <>
            <Navbar className='text-dark mb-3'>
                <Container>
                    <Nav className="mx-auto">
                        <Link class="nav-link nv" to={'/'}><b>Login</b></Link>
                        <Link class="nav-link nv" to={'/Register'}><b>Register</b></Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navi