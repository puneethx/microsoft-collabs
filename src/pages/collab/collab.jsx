import React from 'react'
import "./collab.scss"
import message from "../../assets/Message.svg"
import search from "../../assets/Search.svg"
import user from "../../assets/user.svg"

const collab = () => {
    return (
        <div className="collab">
            <div className="collabbox">
                <div className="left">
                    <div className="lefttop">
                        <div className="lef">
                            Collab
                            <img src={message} alt="img" />
                        </div>
                        <div className="rig">
                            Search
                            <img src={search} alt="img" />
                        </div>
                    </div>
                    <div className="leftbottom">
                        <div className="textuser">
                            <img src={user} alt="user" />
                            <p>Puneeth Reddy T</p>
                        </div>
                        <div className="textuser">
                            <img src={user} alt="user" />
                            <p>Sai Charan</p>
                        </div>
                        <div className="textuser">
                            <img src={user} alt="user" />
                            <p>Rion Dsilva</p>
                        </div>
                        <div className="textuser">
                            <img src={user} alt="user" />
                            <p>Aniesh Reddy</p>
                        </div>
                        <div className="textuser">
                            <img src={user} alt="user" />
                            <p>Jahnavi</p>
                        </div>
                        <div className="textuser">
                            <img src={user} alt="user" />
                            <p>Hemamounika</p>
                        </div>
                        <div className="textuser">
                            <img src={user} alt="user" />
                            <p>Sharukh Khan</p>
                        </div>
                        <div className="textuser">
                            <img src={user} alt="user" />
                            <p>Elon Musk</p>
                        </div>
                        <div className="textuser">
                            <img src={user} alt="user" />
                            <p>Benjamin rich</p>
                        </div>
                        <div className="textuser">
                            <img src={user} alt="user" />
                            <p>Round Robin</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="righttop">
                        <img src={user} alt="" />
                        Puneeth Reddy T
                    </div>
                    <div className="rightbottom">
                        <p className='leftp'>What is the status?</p>
                        <p className='rightp'>The Accuracy is 91%</p>
                        <p className='leftp'>Change the Epoch values</p>
                        <p className='rightp'>Sure</p>
                    </div>
                    <div className='type'>
                        <input type="text" placeholder='Type here...' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default collab