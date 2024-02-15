import React from 'react'
import "./calender.scss"
import userlogo from "../../assets/Male User.svg"
import feb from "../../assets/feb.svg"

const calender = () => {
    return (
        <div className='calenderer'>
            <div className='calender'>
                <div className="left">
                    <div className="lefttop">
                        <img src={userlogo} alt="" />
                        <p className='large'>T Puneeth Reddy</p>
                        <p className='small'>System Architect</p>
                    </div>
                    <div className="leftmid">
                        <p>puneethreddyt@collabs.co</p>
                        <p>Total Annual Leaves: 24</p>
                        <p>No of Leaves Used: 2</p>
                    </div>
                </div>
                <div className="right">
                    <div className="righttop">
                        <div className='box filledhours'>
                            <div className='tube one'></div>
                            <div className='tuber'>Filled Hours</div>
                        </div>
                        <div className='box notfilled'>
                            <div className='tube two'></div>
                            <div className='tuber'>Not Filled Hours</div>
                        </div>
                        <div className='box Leave'>
                            <div className='tube three'></div>
                            <div className='tuber'>Approved Leave</div>
                        </div>
                        <div className='box weekend'>
                            <div className='tube four'></div>
                            <div className='tuber'>Weekend</div>
                        </div>
                        <div className='box holiday'>
                            <div className='tube five'></div>
                            <div className='tuber'>Holiday</div>
                        </div>
                    </div>
                    <div className="rightbottom">
                        <p>February 2024</p>
                        <img src={feb} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default calender