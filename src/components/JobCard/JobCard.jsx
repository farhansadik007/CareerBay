import React from 'react';
import './JobCard.css';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    const { id, logo, Job, company, time, type, salary, location } = job;
    return (
        <div className='jobcard'>
            <div className='jobinfo'>

                <div className='logo-container'>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h3>{Job}</h3>
                    <p>{company}</p>
                    <div className='job-type'>
                        <p>{type}</p>
                        <p>{time}</p>
                    </div>
                    <div className='location-salary'>
                        <p><img src="location.png" alt="" />{location}</p>
                        <p><img src="salary.png" alt="" />{salary}</p>
                    </div>
                </div>
            </div>
            <div>
                <Link to={`/${id}`}>
                    <button>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default JobCard;