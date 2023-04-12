import React, { useEffect, useState } from 'react';
import './AppliedJobs.css';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../fakedb';
import JobCard from '../JobCard/JobCard';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const applied = getShoppingCart();
    let jobTray = [];

    for (const apply in applied) {
        for (const job of jobs) {
            if (parseInt(apply) === job.id) {
                jobTray = [...jobTray, job];
            }
        }
    }
    const [filter, setFilter] = useState([]);
    useEffect(()=>{
        setFilter(jobTray);
    },[])
    const onSite = () => {
        jobTray = jobTray.filter(jb=> jb.type === 'Onsite');
        setFilter(jobTray);
    }
    const Remote = () => {
        jobTray = jobTray.filter(jb=> jb.type === 'Remote');
        setFilter(jobTray);
    }
    const showAll = () => {
        setFilter(jobTray);
    }

    return (
        <div className='applied'>
            <h2>Applied Jobs</h2>

            {/* filter button  */}

            <div className='filter'>
                <button>Filter By</button>
                <div className='dropdown'>
                <button onClick={showAll}>All</button>
                <button onClick={Remote}>Remote</button>
                <button onClick={onSite}>On-site</button>
                </div>
            </div>

            {/* Applied Jobs  */}

            <div>
                {
                    filter.map(job =>
                        <JobCard
                            key={job.id}
                            job={job}
                        ></JobCard>
                    )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;