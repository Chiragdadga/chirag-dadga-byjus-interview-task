import React, { Suspense } from 'react';
import './MyTask.scss'
import Board from './Components/Board'
import List from './Components/List'
import Gantt from './Components/Gantt'
import TaskCalendar from './Components/TaskCalendar'
import Pivot from './Components/Pivot'

import Header from './Components/Header'
const MyTask = (props) => {
    const activeTab = props.match.params.tab != undefined ? props.match.params.tab : "board";
    let activeTabDetails = null;
    switch (activeTab) {
        case "board":
            activeTabDetails = <Board /> 
            break;
        case "list" :
            activeTabDetails = <List />
            break;
        case "gantt":
            activeTabDetails = <Gantt />
            break;
        case "calendar":
            activeTabDetails = <TaskCalendar />
            break;
        case "pivot":
            activeTabDetails = <Pivot />
            break;
        default:
            activeTabDetails = <List />
            break;
    }
    return (
        <div className="my-task-wrapper">
            <Header activeTab={activeTab}/>
            <div className="my-task-body">
                {activeTabDetails} 
            </div>
        </div>
    )
}

export default MyTask