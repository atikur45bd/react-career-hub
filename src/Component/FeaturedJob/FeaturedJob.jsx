import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJob = () => {

    const [jobs, setJob]= useState([]);
    const [dataLength, setDataLength]= useState(4);

    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data =>setJob(data));
    } ,[])
    return (
        <div>
           <div className="text-center">
                <h2 className=" text-2xl lg:text-5xl">Featured Job: {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
           </div>
           <div className={`${dataLength ===jobs.length &&"hidden"} flex justify-center my-6`}>
            <button
            onClick={() =>setDataLength(jobs.length)}
             className="btn btn-primary ">Show All Jobs</button>
           </div>
        </div>
    );
};

export default FeaturedJob;