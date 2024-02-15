import React from 'react'
import "./windevices.scss"
import tune from "../../assets/Tune.svg"
import search from "../../assets/Search.svg"
import auto from "../../assets/automation.svg"

const windevices = () => {
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
                <div className='rightmid'>
                    <p className='midname'>Windows and Devices Team</p>
                    <div className='auto-assign'>
                        <p>Auto Asign</p>
                        <img src={auto} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default windevices