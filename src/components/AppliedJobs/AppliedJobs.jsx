import React, { useState } from 'react';
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

    return (
        <div className='applied'>
            <h2>Applied Jobs</h2>
            <div>
                {
                    jobTray.map(job =>
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