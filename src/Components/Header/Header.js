import React, { useState, useRef } from "react";
import { Col, Row, Input } from 'reactstrap'
import "./Header.scss";
import Logo from '../../assests/images/logo.png'
import Icons from '../Icons';
import ReactWOW from 'react-wow'
import { Link } from 'react-router-dom';

const Header = props => {
    const [showMore, setShowMore] = useState(false)
    const [showAccount, setshowAccount] = useState(false)
    const [inputSearch, setInputSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const handleSearch = () => {
        setShowSearch(!showSearch)
    }
    const showMobileBar = () => {
        document.body.classList.add('active-nav-bar');
    }
    const hideMobileBar = () => {
        document.body.classList.remove('active-nav-bar');
    }
    return (
        <header className="container-fluid">
            <div className="nav-black-bg" onClick={hideMobileBar}></div>
            <Row className="align-items-center">
                <Col xs={3} md="auto">
                    <img src={Logo} className="img-fluid logo" />
                    <div className="mb-manu d-md-none" onClick={showMobileBar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Col>
                <Col xs={4} md="auto">
                    <h1>{props.heading}</h1>
                </Col>
                <Col xs={5} md="auto" className="ml-auto">
                    <div className="header-widgets">
                        <div className="search">
                            <div className="serach-icon d-flex" onClick={() => handleSearch()}>
                                <Icons name="search" />
                            </div>
                            {
                                showSearch &&
                                <ReactWOW animation='fadeIn' duration="0.8s" delay="0s">
                                    <Input type="text" className="seatch-text" placeholder="Search here" onChange={(e) => setInputSearch(e.target.value)} />
                                </ReactWOW>
                            }
                        </div>
                        <div className="more" onMouseOver={() => setShowMore(true)} onMouseLeave={() => setShowMore(false)}>
                            <Icons name="add" />
                            {
                                showMore &&
                                <ReactWOW animation='fadeIn' duration="0.8s" delay="0s">
                                    <ul>
                                        <li>Item 1</li>
                                        <li>Item 2</li>
                                        <li>Item 3</li>
                                        <li>Item 4</li>
                                        <li>Item 5</li>
                                    </ul>
                                </ReactWOW>
                            }
                        </div>
                        <div className="avtar" onMouseOver={() => setshowAccount(true)} onMouseLeave={() => setshowAccount(false)}>
                            <img src={Logo} className="img-fluid mr-1" />
                            <span>Chirag</span>
                            <Icons name="down-arrow" />
                            {
                                showAccount &&
                                <ReactWOW animation='fadeIn' duration="0.8s" delay="0s">
                                    <ul>
                                        <li>Profile</li>
                                        <li>Setting</li>
                                        <li>Logout</li>
                                    </ul>
                                </ReactWOW>
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </header>
    )
}
export default Header;