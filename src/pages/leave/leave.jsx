import React, { useState } from 'react';
import "./leave.scss"

const leave = () => {
    const [leaveType, setLeaveType] = useState('annual');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [comments, setComments] = useState('');
    const [requestIncludes, setRequestIncludes] = useState([]);

    const handleFromDateChange = (event) => {
        setFromDate(event.target.value);
        calculateTotalDays(event.target.value, toDate);
    };

    const handleToDateChange = (event) => {
        setToDate(event.target.value);
        calculateTotalDays(fromDate, event.target.value);
    };

    const handleCommentsChange = (event) => {
        setComments(event.target.value);
    };

    const handleLeaveTypeChange = (event) => {
        setLeaveType(event.target.value);
    };


    const handleRequestIncludesChange = (date, value) => {
        const updatedRequestIncludes = requestIncludes.map((item) =>
            item.date === date ? { ...item, value } : item
        );
        setRequestIncludes(updatedRequestIncludes);
    };

    const calculateTotalDays = (fromDate, toDate) => {
        const start = new Date(fromDate);
        const end = new Date(toDate);
        const totalDays = Math.floor((end - start) / (24 * 60 * 60 * 1000)) + 1;

        const updatedRequestIncludes = Array.from({ length: totalDays }, (_, index) => {
            const currentDate = new Date(start);
            currentDate.setDate(start.getDate() + index);
            return {
                date: currentDate.toISOString().split('T')[0],
                value: 'allDay',
            };
        });

        setRequestIncludes(updatedRequestIncludes);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
    };
    return (
        <div className='leave'>
            <div className="left">
                <div className="leftroute">
                    <p className='active'>Leave Request</p>
                    <p>Leave Status</p>
                    <p>Leave History</p>
                </div>
            </div>
            <div className="right">
                <div className="rightbox">
                    <p className='rightname'>Leave Request</p>
                    <form onSubmit={handleSubmit}>
                        <div className="request">
                            <div className="requestleft">
                                <div className='leavetype'>
                                    <label htmlFor="leaveType">Leave Type</label><br />
                                    <select id="leaveType" className='leavedrop' value={leaveType} onChange={handleLeaveTypeChange}>
                                        <option value="annual">Annual Leave</option>
                                        <option value="medical">Medical Leave</option>
                                        <option value="other1">Other Leave 1</option>
                                        <option value="other2">Other Leave 2</option>
                                    </select>
                                </div>
                                <div className='fromdate'>
                                    <label htmlFor="fromDate">From Date</label><br />
                                    <input type="date" id="fromDate" value={fromDate} onChange={handleFromDateChange} />
                                </div>
                                <div className='todate'>
                                    <label htmlFor="toDate">To Date</label><br />
                                    <input type="date" id="toDate" value={toDate} onChange={handleToDateChange} />
                                </div>
                                <div className='about'>
                                    <label htmlFor="comments">About</label><br />
                                    <textarea
                                        className='aboutarea'
                                        id="comments"
                                        placeholder="Include comments for your approval"
                                        value={comments}
                                        onChange={handleCommentsChange}
                                        maxLength="150"
                                    />
                                </div>
                            </div>
                            <div className="requestright">
                                <div>
                                    <label>Your Request Includes</label>
                                    {requestIncludes.map((item) => (
                                        <div key={item.date}>
                                            {item.date}:&nbsp;
                                            <select value={item.value} onChange={(e) => handleRequestIncludesChange(item.date, e.target.value)}>
                                                <option value="allDay">All Day</option>
                                                <option value="halfDay">Half Day</option>
                                            </select>
                                        </div>
                                    ))}
                                </div>
                                <div className='total'>
                                    <label>Total Days of Leave Needed</label>
                                    <span>{requestIncludes.length}</span>
                                </div>
                            </div>
                        </div>
                        <div className="requestbtn">
                            <button type="submit">Request Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default leave