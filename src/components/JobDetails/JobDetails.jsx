import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css';
import { addToDb, getShoppingCart } from '../fakedb';
import toast from 'react-hot-toast';

const JobDetails = () => {
    //job descriptions
    const jobDetails = useLoaderData();
    let idx = useParams();
    idx = parseInt(idx['jobId']);
    const theJob = jobDetails.find(job => job.id === idx);

    //Applied Jobs

    const notify = () => toast.error('Already Applied!');

    let flag = true;
    const applied = id => {
        const jobs = getShoppingCart();
        for(const idx in jobs) {
            if(parseInt(idx) === id) {
                flag = false;
                notify();
            }
        }
        if(flag) addToDb(id);
    }
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
                    <button onClick={()=>{applied(theJob.id)}} className='apply'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;