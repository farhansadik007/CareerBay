import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css';

const JobDetails = () => {
    const jobDetails = useLoaderData();
    let idx = useParams();
    idx = parseInt(idx['jobId']);
    const theJob = jobDetails.find(job => job.id === idx);

    return (
        <div className='job-details'>
            <h2>Job Details</h2>
            <img src={theJob.logo} alt="" />
            <div className='job-about'>
                <div>
                    <p><span>Job Description:</span> {theJob.jobDesc}</p>
                    <p><span>Job Responsibility:</span> {theJob.responsibility}</p>
                    <p><span>Educational Requirements:</span></p>
                    <p>{theJob.eduReq}</p>
                    <p><span>Experiences:</span> {theJob.experiences}</p>
                </div>
                <div className='job-card'>
                    <h4>Job Details</h4>
                    <hr/>
                    <p><span>Salary:</span> {theJob.salary}</p>
                    <p><span>Job Title:</span> {theJob.Job}</p>
                    <h4>Contact Information</h4>
                    <hr/>
                    <p><span>Phone:</span> {theJob.contact.phone}</p>
                    <p><span>Email:</span> {theJob.contact.email}</p>
                    <p><span>Address:</span> {theJob.contact.address}</p>
                    <button className='apply'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;