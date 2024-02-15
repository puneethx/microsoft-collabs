import React, { useState } from 'react'
import "./taskbar.scss"
import message from "../../assets/Message.svg"
import expo from "../../assets/Expo.svg"
import tasks from "../../assets/Tasks.svg"
import vector from "../../assets/Vector.svg"
import { Link } from "react-router-dom"


const taskbar = () => {
    const [activeItem, setActiveItem] = useState("Tasks");

    const handleItemClick = (item) => {
        setActiveItem(item);
    };
    return (
        <>
            <div className='routes'>
                <ul className='taskbar'>
                    <Link to="/" className={`link ${activeItem === "Tasks" && "active"}`}
                        onClick={() => handleItemClick("Tasks")}>
                        <li className="bar tasks">
                            <img src={tasks} alt="tasks" />
                            <p>Tasks</p>
                        </li>
                    </Link>
                    <Link to="/collab" className={`link ${activeItem === "Collab" && "active"}`}
                        onClick={() => handleItemClick("Collab")}>
                        <li className="bar message">
                            <img src={message} alt="collab" />
                            <p>Collab</p>
                        </li>
                    </Link>
                    <Link to="/calender" className={`link ${activeItem === "Calender" && "active"}`}
                        onClick={() => handleItemClick("Calender")}>
                        <li className="bar vector">
                            <img className='calimg' src={vector} alt="calender" />
                            <p>Calender</p>
                        </li>
                    </Link>
                    <Link to="/leave" className={`link ${activeItem === "Leave" && "active"}`}
                        onClick={() => handleItemClick("Leave")}>
                        <li className="bar expo">
                            <img src={expo} alt="leave" />
                            <p>Leave</p>
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default taskbar