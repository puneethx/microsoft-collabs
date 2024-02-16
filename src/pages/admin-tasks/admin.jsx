import React from 'react'
import "./admin.scss"
import plus from "../../assets/Plus.svg"
import search from "../../assets/Search.svg"
import automation from "../../assets/automation.svg"
import { Link } from 'react-router-dom'

const admin = () => {
    return (
        <div className='admasks'>
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
                        Good Afternoon, Charan
                    </div>
                    <div className='icons'>
                        <div className='create'>
                            Create
                            <img src={plus} alt="plus" />
                        </div>
                        <img src={search} alt="search" />
                    </div>
                </div>
                <div className='rightbottom'>
                    <p className='teams'>Teams</p>
                    <div className='auto-assign'>
                        <p>Auto Assign</p>
                        <img src={automation} alt="" />
                    </div>
                    <div className='teamsroute'>
                        <div>
                            <ul>
                                <Link to="/windows-devices"><li>Cloud and Enterprise Team</li></Link>
                                <li>Artificial Intelligence Team</li>
                                <li>Office Products Group</li>
                                <li>Experience & Devices Group</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Production Team</li>
                                <li>Sales and Marketing Team</li>
                                <li>Accounting and Finance Team</li>
                                <li>Cross-Functional Team</li>
                                <li>Self-Managed Team</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default admin