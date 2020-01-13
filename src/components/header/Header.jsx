import React, { useContext } from 'react';
import './Header.css';
import Context from '../../context/Context';
import {
    Col,
    Row,
    Navbar,
    NavbarBrand
} from 'reactstrap';
import logoBk from '../../assets/image/rokketlabicon.png';
import logoWt from '../../assets/image/rokketlabiconw.png';
import logoTextBk from '../../assets/image/rokketlabs.png';
import logoTextWt from '../../assets/image/rokketlabsw.png';

const Header = () => {
    const contextData = useContext(Context);
    const theme = contextData.theme;

    return (
        <div className="header">
            <Navbar color="" expand="md" className="nav">
                <NavbarBrand href="/">
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
                </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default Header;