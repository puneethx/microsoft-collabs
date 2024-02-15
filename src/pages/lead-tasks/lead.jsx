import React from 'react'
import "./lead.scss"
import tune from "../../assets/Tune.svg"
import search from "../../assets/Search.svg"

const lead = () => {
    return (
        <div className='admTasks'>
            <div className="left">
                <div className='name'>
                    Collabs
                </div>
                <div className="middle">
                    <div className='mid assigned'>
                        <div>Assigned</div>
                        <div className='round'><span className='number'>2</span></div>
                    </div>
                    <div className='mid unassigned'>
                        <div>Unassigned</div>
                        <div className='round2'><span className='number'>6</span></div>
                    </div>
                    <div className='mid completed'>
                        <div>Completed</div>
                        <div className='round2'><span className='number'>8</span></div>
                    </div>
                </div>
                <div className="tags">
                    <p className='tagName'>Tags</p>
                    <div className="tagTags">
                        <p className='priority'>#Priority</p>
                        <p className='low'>#Low</p>
                        <p className='improve'>#Improvements</p>
                    </div>
                </div>
                <div className="daily">
                    <div className='dname'>
                        Daily Meeting:
                    </div>
                    <div className='daTime'>
                        <div>
                            15th Feb 2023, 19:45 PM
                        </div>
                        <div className='redround'>
                            <span>1</span>
                        </div>
                    </div>
                </div>
                <div className="help">
                    <div className="greyround">
                        <span>?</span>
                    </div>
                    <div>Help and Support</div>
                </div>
            </div>
            <div className="right">
                <div className="rightTop">
                    <div>
                        Good Afternoon, Rion
                    </div>
                    <div className='icons'>
                        <img src={search} alt="search" />
                        <img src={tune} alt="customize" />
                    </div>
                </div>
                <div className="status">
                    <div className="todo">
                        <p className='toname'>Assigned</p>
                        <p><span className='improve'>#Improvements</span><br/>Change the bot name to JARVIS from KIRA.<br/><span className='assignedTo'>To Puneeth </span></p>
                        <p><span className='priority'>#Priority</span><br/>Load Screen Pause/Freezing after clicking the download button.<br/><span className='assignedTo'>To Pablo </span></p>
                    </div>
                    <div className="progress">
                        <p className='proname'>Unassigned</p>
                        <p><span className='priority'>#Priority</span><br />Run new batch suites and compare accuracy with before results.<br/><span className='assignTo'>To Charan </span></p>
                        <p><span className='low'>#Low</span><br/>Request JIRA Access.<br/><span className='assignTo'>To Aniesh </span></p>
                        <p><span className='improve'>#Improvements</span><br />Change the bot name to JARVIS from KIRA.<br/><span className='assignTo'>To Puneeth </span></p>
                        <p><span className='improve'>#Improvements</span><br />Change the bot name to JARVIS from KIRA.<br/><span className='assignTo'>To Jahnavi </span></p>
                    </div>
                    <div className="done">
                        <p className='doname'>Completed</p>
                        <p><span className='low'>#Low</span><br />Change the bot name to JARVIS from KIRA.<br/><span className='doneby'>By Puneeth, 13:12</span></p>
                        <p><span className='priority'>#Priority</span><br/>Load Screen Pause/Freezing after clicking the download button.<br/><span className='doneby'>By Jahnavi, 17:12</span></p>
                        <p><span className='priority'>#Priority</span><br />Run new batch suites and compare accuracy with before results.<br/><span className='doneby'>By Aniesh, 21:32</span></p>
                        <p><span className='improve'>#Improvements</span><br />Change the bot name to JARVIS from KIRA.<span className='doneby'>By Charan, 13:12</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default lead