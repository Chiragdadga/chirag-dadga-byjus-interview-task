import React, { Component } from 'react';
import { Col, Row } from 'reactstrap'
import Icons from '../../../Components/Icons'
import img from '../../../assests/images/logo.png'
export default class Board extends Component {
    state = {
        tasks: [
            { id: 1, name: "CBSE Grade 1 Maths - Algebra", date: "21-Nov-2019", Completed: 47, assigned: [{ id: 1, name: "Chirag", image: img }, { id: 2, name: "Chirag", image: img }], category: "ontrack" },
            { id: 2, name: "CBSE Grade 2 Maths - Algebra", date: "04-Des-2019", Completed: 22, assigned: [{ id: 1, name: "Chirag", image: img }, { id: 2, name: "Chirag", image: img }], category: "ontrack" },
            { id: 3, name: "CBSE Grade 3 Maths - Algebra", date: "17-Nov-2019", Completed: 45, assigned: [{ id: 1, name: "Chirag", image: img }, { id: 2, name: "Chirag", image: img }], category: "ontrack" },
            { id: 4, name: "CBSE Grade 1 Maths - Algebra", date: "19-Nov-2019", Completed: 99, assigned: [{ id: 1, name: "Chirag", image: img }, { id: 2, name: "Chirag", image: img }], category: "onhold" },
            { id: 5, name: "CBSE Grade 2 Maths - Algebra", date: "11-Nov-2019", Completed: 73, assigned: [{ id: 1, name: "Chirag", image: img }, { id: 2, name: "Chirag", image: img }], category: "onhold" },
            { id: 6, name: "CBSE Grade 1 Maths - Algebra", date: "29-Nov-2019", Completed: 66, assigned: [{ id: 1, name: "Chirag", image: img }, { id: 2, name: "Chirag", image: img }], category: "delayed" },
        ]
    }

    onDragStart = (event, id) => {
        console.log('dragstart:', event);
        event.dataTransfer.setData("id", id);
        document.getElementById(id).style.background = 'rgba(174, 191, 212, 0.18823529411764706)';
    }

    onDragOver = (event) => {
        event.preventDefault();
    }

    onDrop = (event, cat) => {
        let id = event.dataTransfer.getData("id");

        let tasks = this.state.tasks.filter((task) => {
            if (task.id == id) {
                task.category = cat;
            }
            return task;
        });

        this.setState({
            ...this.state,
            tasks
        });
    }

    render() {
        const { tasks } = this.state;
        var segregatedTasks = {
            ontrack: [],
            onhold: [],
            delayed : []
        }
        tasks.map((item, index) => {
            return segregatedTasks[item.category].push(
                <div key={index} className="row no-gutters task" id={item.id} onDragStart={(e) => this.onDragStart(e, item.id)} draggable>
                    <Col md="12" className="align-self-start">
                        <Row className="justify-content-between no-gutters">
                            <Col xs={9}>
                                <h6>{item.name}</h6>
                            </Col>
                            <Col xs={"auto"}>
                                <div className="more">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="12" className="align-self-end">
                        <Row>
                            <Col md={6}>
                                {
                                    item.assigned && item.assigned.map((item,index) => {
                                        return <div key={index} className="img" draggable={false}>
                                            <img src={item.image} className="img-fluid" alt="assigned-img"/> 
                                        </div>
                                    })
                                }
                                <div className="add-more">
                                    <Icons name="add" />
                                </div>
                            </Col>
                            <Col md={6}>
                                <span className="date"><Icons name="calendar" />{item.date}</span>
                                <span className="prograss">{item.Completed}%</span>
                            </Col>
                        </Row>
                    </Col>
                </div>
            );
        });
        
        return (
            <div className="bord-wrapper">
                <Row>
                    <Col md={4}>
                        <div className="on-track card"
                            onDragOver={(e) => this.onDragOver(e)}
                            onDrop={(e) => { this.onDrop(e, "ontrack") }}>
                            <div className="card-header">
                                <Row className="justify-content-between no-gutters">
                                    <Col xs={9}>
                                        <h5>On Track</h5>
                                    </Col>
                                    <Col xs={"auto"}>
                                        <div className="more">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            {segregatedTasks.ontrack}
                        </div>

                    </Col>
                    <Col md={4}>
                        <div className="Delayed card"
                            onDragOver={(e) => this.onDragOver(e)}
                            onDrop={(e) => this.onDrop(e, "delayed")}>
                            <div className="card-header">
                                <Row className="justify-content-between no-gutters">
                                    <Col xs={9}>
                                        <h5>On Delayed</h5>
                                    </Col>
                                    <Col xs={"auto"}>
                                        <div className="more">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            {segregatedTasks.delayed}
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="on-hold card"
                            onDragOver={(e) => this.onDragOver(e)}
                            onDrop={(e) => this.onDrop(e, "onhold")}>
                            <div className="card-header">
                                <Row className="justify-content-between no-gutters">
                                    <Col xs={9}>
                                        <h5>On Hold</h5>
                                    </Col>
                                    <Col xs={"auto"}>
                                        <div className="more">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            {segregatedTasks.onhold}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}