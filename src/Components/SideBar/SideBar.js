import React, { useState } from 'react';
import { Col, Row, Input } from 'reactstrap';
import Icons from '../Icons';
import ReactWOW from 'react-wow';
import './SideBar.scss';
import {Link} from 'react-router-dom';
const SideBar = props => {
    const [collapseSidebar, setCollapseSodebar] = useState(false);
    const toggleSidebar = () => {
        setCollapseSodebar(!collapseSidebar)   
    }
    const hideMobileBar = () => {
        document.body.classList.remove('active-nav-bar');
    }
    return (
        <aside className={collapseSidebar ? "collapsed" : ""} id="sidebar">
            <span className="close d-md-none" onClick={hideMobileBar}>&times;</span>
            <ul>
                <li onClick={hideMobileBar}><Link to="" onClick={() => props.handleHeading("Home")} ><Icons name="home" /> <span>Home</span></Link></li>
                <li onClick={hideMobileBar}><Link to="" onClick={() => props.handleHeading("Overview")}><Icons name="search" /> <span>Overview</span></Link></li>
                <li onClick={hideMobileBar}><Link to="" onClick={() => props.handleHeading("Projects")}><Icons name="folder" /> <span>Projects</span></Link></li>
                <li onClick={hideMobileBar} className="active"><Link to="/mytask" onClick={() => props.handleHeading("My Task")}><Icons name="clipboard" /> <span>My Tasks</span></Link></li>
                <li onClick={hideMobileBar}><Link to="" onClick={() => props.handleHeading("My Inbox")}><Icons name="documents" /> <span>My Inbox</span></Link></li>
                <li onClick={hideMobileBar}><Link to="" onClick={() => props.handleHeading("Utilization")}><Icons name="team" /> <span>Utilization</span></Link></li>
                <li onClick={hideMobileBar}><Link to="" onClick={() => props.handleHeading("Reports")}><Icons name="statistics" /> <span>Reports</span></Link></li>
            </ul>
            <div className="sidebar-toggle" onClick={toggleSidebar.bind(this)}>{collapseSidebar ? ">" : "<"}</div>
        </aside>
    )
}

export default SideBar