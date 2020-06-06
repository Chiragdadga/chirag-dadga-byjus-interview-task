import React from 'react';
import { Col, Row, Container } from 'reactstrap'
import {Link} from 'react-router-dom'
import Icons from '../../../Components/Icons'
const Header = props => {
    return (
        <div className="tab">
            <Container fluid>
                <Row className="justify-content-between align-items-center">
                    <Col md={7}>
                        <ul>
                            <li className={props.activeTab === "list" ? "active" : ""}><Link to="/mytask/list">List</Link><span></span></li>
                            <li className={props.activeTab === "gantt" ? "active" : ""}><Link to="/mytask/gantt">Gantt</Link><span></span></li>
                            <li className={props.activeTab === "board" ? "active" : ""}><Link to="/mytask/board">Board</Link><span></span></li>
                            <li className={props.activeTab === "calendar" ? "active" : ""}><Link to="/mytask/calendar">Calendar</Link><span></span></li>
                            <li className={props.activeTab === "pivot" ? "active" : ""}><Link to="/mytask/pivot">Pivot</Link><span></span></li>
                        </ul>
                    </Col>
                    <Col md="auto">
                        <div className="extra-filters">
                            <div className="fields">
                                <Icons name="squares" />
                                <span>Fields</span>
                            </div>
                            <div className="sort">
                                <Icons name="exchange" />
                                <span>Sort</span>
                            </div>
                            <div className="fileter">
                                <Icons name="funnel" />
                                <span>Filter</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Header;
