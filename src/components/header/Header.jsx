import React, { useContext } from 'react';
import './Header.scss';
import Context from '../../context/Context';
import {
    Col,
    Row,
    Nav,
    Navbar,
    NavLink,
    NavItem,
    NavbarText,
    Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import ThemeToggler from '../theme-toggler/ThemeToggler';
import logoBk from '../../assets/image/rokketlabicon.png';
import logoWt from '../../assets/image/rokketlabiconw.png';
import logoTextBk from '../../assets/image/rokketlabs.png';
import logoTextWt from '../../assets/image/rokketlabsw.png';

const Header = () => {
    // getting global theme
    
    const contextData = useContext(Context);
    const theme = contextData.theme;

    return (
        <div className="header">
            <Navbar color="" expand="md" className="nav">
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/">
                            <Row>
                                <Col>
                                    <img  
                                        alt=""
                                        src={ theme === 'light' ? logoBk : logoWt }
                                        className="header-img mr-md-4"
                                    />
                                </Col>
                                <Col className={ theme === 'light' ? 'header-col-bordered' : 'header-col-bordered-dark' }>
                                    <img  
                                        alt=""
                                        src={ theme === 'light' ? logoTextBk : logoTextWt }
                                        className="header-img ml-md-4"
                                    />
                                </Col>
                            </Row>
                        </NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>
                    <Row>
                        <ThemeToggler />
                        <Button
                        color="tranparent"
                        href="/"
                        className="theme-toggler-button">
                            <FontAwesomeIcon 
                                color={ 
                                    contextData.theme === 'light' 
                                    ? 'black' 
                                    : 'white' 
                                }
                                icon={faHome}
                            />
                        </Button>
                    </Row>
                </NavbarText>
            </Navbar>
        </div>
    )
}

export default Header;