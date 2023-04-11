import React from 'react';
import './Job.css';

const Job = ({ job }) => {
    const { logo, Job, company, type, time, location, salary } = job;

    return (
        <div className='card'>
            <img src={logo} alt="" />
            <h4>{Job}</h4>
            <p>{company}</p>
            <div className='job-type'>
                <p>{type}</p>
                <p>{time}</p>
            </div>
            <div className='location-salary'>
                <p><img src="location.png" />{location}</p>
                <p><img src="salary.png" /> Salary: {salary}</p>
            </div>
            <button>View Details</button>
        </div>
    );
};

export default Job;