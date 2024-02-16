import React from 'react'
import "./member.scss"
import tune from "../../assets/Tune.svg"
import search from "../../assets/Search.svg"

const member = () => {
    const apiUrl = 'http://127.0.0.1:5000/task/member-tasks';

    const postData = {
        "member_id":7001
    }
    const requestOptions= {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData),
    }

    fetch(apiUrl,requestOptions)
    .then(response => {
        if(!response.ok){
            throw new Error("HTTP error! status: ${response.status}");
        }
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })

    return (
        <div className='memTasks'>
            <div className="left">
                <div className='name'>
                    Collabs
                </div>
                <div className="middle">
                    <div className='mid today'>
                        <div>Today</div>
                        <div className='round'><span className='number'>8</span></div>
                    </div>
                    <div className='mid next'>
                        <div>Next 7 Days</div>
                        <div className='round2'><span className='number'>6</span></div>
                    </div>
                    <div className='mid all'>
                        <div>All Tasks</div>
                        <div className='round2'><span className='number'>14</span></div>
                    </div>
                </div>
                <div className="tags">
                    <p className='tagName'>Tags</p>
                    <div className="tagTags">
                        <p className='priority'>Compare Accuracy</p>
                        <p className='low'>JIRA Task</p>
                        <p className='improve'>Improvements</p>
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
                        Backend still need to be connected, it runs on local host
                    </div>
                    <div className='icons'>
                        <img src={search} alt="search" />
                        <img src={tune} alt="customize" />
                    </div>
                </div>
                <div className="status">
                    <div className="todo">
                        <p className='toname'>To Do</p>
                        <p><span className='improve'>Improvements</span><br/>Change the bot name to JARVIS from KIRA.</p>
                        <p><span className='priority'>Compare Accuracy</span><br/>Load Screen Pause/Freezing after clicking the download button.</p>
                    </div>
                    <div className="progress">
                        <p className='proname'>In Progress</p>
                        <p><span className='priority'>Compare Accuracy</span><br />Run new batch suites and compare accuracy with before results.</p>
                        <p><span className='low'>JIRA Task</span><br/>Request JIRA Access.</p>
                        <p><span className='improve'>Improvements</span><br />Change the bot name to JARVIS from KIRA.</p>
                        <p><span className='improve'>Improvements</span><br />Change the bot name to JARVIS from KIRA.</p>
                    </div>
                    <div className="done">
                        <p className='doname'>Done</p>
                        <p><span className='low'>JIRA Task</span><br />Change the bot name to JARVIS from KIRA.</p>
                        <p><span className='priority'>Compare Accuracy</span><br/>Load Screen Pause/Freezing after clicking the download button.</p>
                        <p><span className='priority'>Compare Accuracy</span><br />Run new batch suites and compare accuracy with before results.</p>
                        <p><span className='improve'>Improvements</span><br />Change the bot name to JARVIS from KIRA.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default member