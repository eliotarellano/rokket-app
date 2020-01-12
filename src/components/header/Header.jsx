import React from 'react';
import './Header.css';
import {
    Col,
    Row,
    Navbar,
    NavbarBrand
} from 'reactstrap';
import logo from '../../assets/image/rokketlabicon.png';
import logoText from '../../assets/image/rokketlabs.png'

const Header = () => { 
    return (
        <div className="header">
            <Navbar color="" expand="md" className="nav">
                <NavbarBrand href="/">
                    <Row>
                        <Col>
                            <img  
                                alt=""
                                src={logo}
                                className="header-img mr-md-4"
                            />
                        </Col>
                        <Col className="header-col-bordered">
                            <img  
                                alt=""
                                src={logoText}
                                className="header-img ml-md-4"
                            />
                        </Col>
                    </Row>
                </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default Header;