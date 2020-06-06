import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import Popup from './Popup.js'
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment)

const TaskCalendar = () => {
    const [task, setTask] = useState([{}])
    const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        setTask([
            {
                id: 0,
                title: 'Task 1 need to complete',
                start: new Date(2020, 5, 6),
                end: new Date(2020, 5, 6),
            },
            {
                id: 1,
                title: 'Task 2 need to complete',
                start: new Date(2020, 5, 14),
                end: new Date(2020, 5, 15),
            },

            {
                id: 2,
                title: 'Task 3 need to complete',
                start: new Date(2020, 5, 10),
                end: new Date(2020, 5, 11),
            },
        ]);
    }, [])

    const CustomToolbar = (toolbar) => {
        const goToBack = () => {
            toolbar.date.setMonth(toolbar.date.getMonth() - 1);
            toolbar.onNavigate('prev');
        };

        const goToNext = () => {
            toolbar.date.setMonth(toolbar.date.getMonth() + 1);
            toolbar.onNavigate('next');
        };
        // const goToCurrent = () => {
        //     const now = new Date();
        //     toolbar.date.setMonth(now.getMonth());
        //     toolbar.date.setYear(now.getFullYear());
        //     toolbar.onNavigate('current');
        // };
        const label = () => {
            const date = moment(toolbar.date);
            return (
                <span><b>{date.format('MMMM')}</b><span> {date.format('YYYY')}</span></span>
            );
        };

        return (
            <div className="custom-toolbar">
                <button onClick={goToBack}>&#8249;</button>
                <label >{label()}</label>
                <button onClick={goToNext}>&#8250;</button>
            </div>
        );
    };
    const sPopup = () => {
        setShowPopup(true)
    }
    function Event({ event }) {
        return (
            <span>
                <strong onClick={sPopup}>{event.title}</strong>
                {event.desc && ':  ' + event.desc}
            </span>
        )
    }

    return (
        <div className="task-calender">
            <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={task}
                components={{
                    toolbar: CustomToolbar,
                    event: Event,
                }}
                style={{ height: "500px", width: "100%" }}
            />
            {showPopup && <Popup setShowPopup={() => setShowPopup(false)} />}
        </div>
    )
}


export default TaskCalendar;